/** Valeur que l'école doit encore fournir : la page affiche un repère, la mise en ligne est bloquée. */
export const A_FOURNIR = null;

export type EtatInscriptions = "ouvertes" | "fermees";

export interface LienNavigation {
  libelle: string;
  href: string;
}

export interface InfosSite {
  nom: string;
  sigle: string;
  urlSite: string;
  urlPlateforme: string;
  slogan: string | null;
  anneeInscriptions: string;
  /** null : badge masqué tant que l'école n'a pas fixé l'état. */
  etatInscriptions: EtatInscriptions | null;
  contact: {
    /** Format international sans espaces, ex. 50937000000. */
    whatsapp: string | null;
    /** Format affiché, ex. +509 3700-0000. */
    telephone: string | null;
  };
}

export interface Niveau {
  code: string;
  libelle: string;
}

export interface Cycle {
  id: string;
  nom: string;
  resume: string;
  niveaux: Niveau[];
}

export interface Ordre {
  id: "fondamental" | "secondaire";
  nom: string;
  resume: string;
  cycles: Cycle[];
}

export interface Filiere {
  sigle: string;
  /** Nom complet : à confirmer par l'école avant la mise en ligne. */
  nom: string;
}

export interface ChiffreCle {
  valeur: string | null;
  libelle: string;
  /** Obligatoire pour un chiffre qui n'est pas structurel (D-17). */
  source?: string;
}

export interface Actualite {
  slug: string;
  titre: string;
  /** Format AAAA-MM-JJ. */
  date: string;
  resume: string;
  /** Chemin sous /public, ex. /images/actualites/rentree.webp */
  image?: { src: string; alt: string; largeur: number; hauteur: number };
}
