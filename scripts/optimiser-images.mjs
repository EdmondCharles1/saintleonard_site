/**
 * D-07 : optimise les photos AVANT le build.
 *
 * Entrée : images-source/ (originaux, JAMAIS versionnés : ils contiennent les
 *          métadonnées EXIF, dont la position GPS des téléphones).
 * Sortie : public/images/<nom>-<largeur>.webp, métadonnées supprimées.
 *
 * Usage : node scripts/optimiser-images.mjs
 * Affiche pour chaque image les dimensions à reporter dans content/.
 */
import { mkdir, readdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SOURCE = path.resolve("images-source");
const SORTIE = path.resolve("public", "images");
const LARGEURS = [640, 1280];
const EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".heic", ".tif", ".tiff"]);

await mkdir(SORTIE, { recursive: true });
const fichiers = (await readdir(SOURCE)).filter((f) => EXTENSIONS.has(path.extname(f).toLowerCase()));
if (fichiers.length === 0) {
  console.log("Aucune image dans images-source/.");
  process.exit(0);
}

for (const fichier of fichiers) {
  const nom = path
    .basename(fichier, path.extname(fichier))
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  for (const largeur of LARGEURS) {
    const cible = path.join(SORTIE, `${nom}-${largeur}.webp`);
    // .rotate() applique l'orientation EXIF avant suppression des métadonnées ;
    // sharp ne recopie aucune métadonnée sans .withMetadata() explicite.
    const info = await sharp(path.join(SOURCE, fichier))
      .rotate()
      .resize({ width: largeur, withoutEnlargement: true })
      .webp({ quality: 78 })
      .toFile(cible);
    console.log(`/images/${nom}-${largeur}.webp : largeur ${info.width}, hauteur ${info.height}, ${Math.round(info.size / 1024)} Ko`);
  }
}
