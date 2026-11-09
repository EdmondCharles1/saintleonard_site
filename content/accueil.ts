import { A_FOURNIR, type ChiffreCle } from "./types";

/** Année de fondation : À FOURNIR. Les années d'existence sont calculées au build. */
export const anneeFondation: number | null = A_FOURNIR;

/** Taux de réussite : examen et session obligatoires, source MENFP (D-17). */
export const tauxReussite: { valeur: string; examen: string; session: string } | null = A_FOURNIR;

export function chiffresCles(anneeCourante: number): ChiffreCle[] {
  return [
    {
      valeur: anneeFondation === null ? null : String(anneeCourante - anneeFondation),
      libelle: "années au service des familles",
    },
    {
      valeur: tauxReussite?.valeur ?? null,
      libelle: tauxReussite
        ? `de réussite aux examens officiels (${tauxReussite.examen}, session ${tauxReussite.session})`
        : "de réussite aux examens officiels",
      source: "Résultats officiels du MENFP",
    },
    { valeur: "13", libelle: "années de scolarité, de la 1re AF à la NS4" },
    { valeur: "4", libelle: "filières en NS3 et NS4" },
  ];
}
