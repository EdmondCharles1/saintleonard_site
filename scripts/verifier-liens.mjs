/**
 * Contrôle des liens du build (out/) : chaque lien interne doit mener à une
 * page ou un fichier existant. Les liens externes sont listés, pas appelés
 * (contrôle hors ligne, sans dépendance au réseau).
 */
import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";

const OUT = path.resolve("out");
const LIEN = /<a\s[^>]*href="([^"]+)"/g;
const externes = new Set();
const casses = [];

async function existe(cible) {
  try {
    const s = await stat(cible);
    return s.isDirectory() ? existe(path.join(cible, "index.html")) : true;
  } catch {
    return false;
  }
}

async function pages(dossier) {
  const liste = [];
  for (const e of await readdir(dossier, { withFileTypes: true })) {
    const chemin = path.join(dossier, e.name);
    if (e.isDirectory()) liste.push(...(await pages(chemin)));
    else if (e.name.endsWith(".html")) liste.push(chemin);
  }
  return liste;
}

for (const fichier of await pages(OUT)) {
  const html = await readFile(fichier, "utf8");
  for (const [, href] of html.matchAll(LIEN)) {
    if (/^(https?:|tel:|mailto:)/.test(href)) {
      externes.add(href.split("?")[0]);
      continue;
    }
    if (href.startsWith("#")) continue;
    const cible = path.join(OUT, decodeURIComponent(href.split("#")[0].split("?")[0]));
    if (!(await existe(cible))) casses.push(`${path.relative(OUT, fichier)} → ${href}`);
  }
}

console.log("Liens externes (non appelés) :");
for (const e of [...externes].sort()) console.log(`- ${e}`);
if (casses.length > 0) {
  console.error("Liens internes cassés :");
  for (const c of casses) console.error(`- ${c}`);
  process.exit(1);
}
console.log("Liens internes : tous valides.");
