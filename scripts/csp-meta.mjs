/**
 * D-06 : CSP stricte par empreintes, appliquée après `next build`.
 *
 * Pour chaque page HTML de out/ :
 *  1. calcule l'empreinte SHA-256 de chaque <script> et <style> en ligne ;
 *  2. insère, juste après <meta charSet="utf-8"/>, une balise
 *     <meta http-equiv="Content-Security-Policy"> qui n'autorise que ces
 *     empreintes et les fichiers du site lui-même.
 *
 * L'en-tête HTTP de vercel.json porte les directives qu'une balise meta ne
 * peut pas porter (frame-ancestors). Le navigateur applique les deux.
 * Le build échoue si une page n'a pas le point d'insertion attendu.
 */
import { createHash } from "node:crypto";
import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const OUT = path.resolve("out");
const ANCRE = '<meta charSet="utf-8"/>';
const SCRIPT_EN_LIGNE = /<script(?![^>]*\ssrc=)[^>]*>([\s\S]*?)<\/script>/g;
const STYLE_EN_LIGNE = /<style[^>]*>([\s\S]*?)<\/style>/g;

function empreinte(contenu) {
  return `'sha256-${createHash("sha256").update(contenu, "utf8").digest("base64")}'`;
}

function empreintes(html, motif) {
  const resultat = new Set();
  for (const m of html.matchAll(motif)) {
    if (m[1].length > 0) resultat.add(empreinte(m[1]));
  }
  return [...resultat];
}

async function pagesHtml(dossier) {
  const entrees = await readdir(dossier, { withFileTypes: true });
  const fichiers = await Promise.all(
    entrees.map((e) => {
      const chemin = path.join(dossier, e.name);
      if (e.isDirectory()) return pagesHtml(chemin);
      return e.name.endsWith(".html") ? [chemin] : [];
    }),
  );
  return fichiers.flat();
}

const pages = await pagesHtml(OUT);
let total = 0;

for (const fichier of pages) {
  const html = await readFile(fichier, "utf8");
  if (html.includes('http-equiv="Content-Security-Policy"')) {
    throw new Error(`CSP déjà présente (build non nettoyé ?) : ${fichier}`);
  }
  if (!html.includes(ANCRE)) {
    throw new Error(`Point d'insertion ${ANCRE} absent : ${fichier}`);
  }
  const scripts = empreintes(html, SCRIPT_EN_LIGNE);
  const styles = empreintes(html, STYLE_EN_LIGNE);
  const csp = [
    "default-src 'self'",
    `script-src 'self' ${scripts.join(" ")}`.trim(),
    `style-src 'self' ${styles.join(" ")}`.trim(),
    "img-src 'self' data:",
    "font-src 'self'",
    "connect-src 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'none'",
  ].join("; ");
  const balise = `<meta http-equiv="Content-Security-Policy" content="${csp}"/>`;
  await writeFile(fichier, html.replace(ANCRE, `${ANCRE}${balise}`), "utf8");
  total += 1;
  console.log(`CSP : ${path.relative(OUT, fichier)} (${scripts.length} scripts, ${styles.length} styles)`);
}

console.log(`CSP insérée dans ${total} page(s).`);
