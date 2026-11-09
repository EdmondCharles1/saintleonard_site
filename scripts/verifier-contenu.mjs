/**
 * Garde de mise en ligne : échoue si une page du build contient encore un
 * repère « à fournir » (attribut data-a-fournir). À lancer avant la bascule
 * DNS, pas en CI tant que le contenu n'est pas complet.
 */
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const OUT = path.resolve("out");
const manques = [];

async function parcourir(dossier) {
  for (const e of await readdir(dossier, { withFileTypes: true })) {
    const chemin = path.join(dossier, e.name);
    if (e.isDirectory()) await parcourir(chemin);
    else if (e.name.endsWith(".html")) {
      const n = ((await readFile(chemin, "utf8")).match(/data-a-fournir="true"/g) ?? []).length;
      if (n > 0) manques.push(`${path.relative(OUT, chemin)} : ${n} élément(s) à fournir`);
    }
  }
}

await parcourir(OUT);
if (manques.length > 0) {
  console.error("Contenu incomplet, mise en ligne bloquée :");
  for (const m of manques) console.error(`- ${m}`);
  process.exit(1);
}
console.log("Contenu complet : aucun élément à fournir.");
