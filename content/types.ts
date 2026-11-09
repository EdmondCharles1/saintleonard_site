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
