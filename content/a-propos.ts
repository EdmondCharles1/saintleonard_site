import { A_FOURNIR, type ImageLocale } from "./types";

/** Chaque texte est une liste de paragraphes. null : À FOURNIR par l'école. */
export const histoire: string[] | null = A_FOURNIR;
export const mission: string[] | null = A_FOURNIR;
export const vision: string[] | null = A_FOURNIR;

/** Fait établi : l'école est reconnue par le MENFP (numéro d'autorisation non publié). */
export const reconnaissance =
  "Le Cours Privé Mixte Saint-Léonard est reconnu par le Ministère de l'Éducation nationale et de la Formation professionnelle (MENFP).";

export interface Infrastructure {
  nom: string;
  description: string;
  image?: ImageLocale;
}

/** Bâtiments, salles, espaces : photos de bâtiments ou d'élèves de dos uniquement (D-07). */
export const infrastructures: Infrastructure[] | null = A_FOURNIR;
