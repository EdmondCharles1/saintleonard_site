/**
 * Sert out/ en local avec les en-têtes de vercel.json, pour reproduire la
 * production dans les tests. Usage : node scripts/serve-out.mjs [port]
 */
import { createReadStream } from "node:fs";
import { readFile, stat } from "node:fs/promises";
import { createServer } from "node:http";
import path from "node:path";

const OUT = path.resolve("out");
const PORT = Number(process.argv[2] ?? 4173);
const vercel = JSON.parse(await readFile("vercel.json", "utf8"));
const enTetes = vercel.headers.flatMap((r) => r.headers);
const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".woff2": "font/woff2",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".xml": "application/xml",
};

async function resoudre(url) {
  const chemin = path.normalize(decodeURIComponent(new URL(url, "http://x").pathname));
  let fichier = path.join(OUT, chemin);
  if (!fichier.startsWith(OUT)) return null;
  try {
    if ((await stat(fichier)).isDirectory()) fichier = path.join(fichier, "index.html");
    await stat(fichier);
    return fichier;
  } catch {
    return null;
  }
}

createServer(async (req, res) => {
  for (const { key, value } of enTetes) res.setHeader(key, value);
  let fichier = await resoudre(req.url ?? "/");
  let code = 200;
  if (!fichier) {
    fichier = path.join(OUT, "404.html");
    code = 404;
  }
  res.writeHead(code, { "Content-Type": TYPES[path.extname(fichier)] ?? "application/octet-stream" });
  createReadStream(fichier).pipe(res);
}).listen(PORT, () => console.log(`out/ servi sur http://localhost:${PORT}`));
