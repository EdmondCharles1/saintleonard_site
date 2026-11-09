import { A_FOURNIR, type InfosSite, type LienNavigation } from "./types";

export const site: InfosSite = {
  nom: "Cours Privé Mixte Saint-Léonard",
  sigle: "CPMSL",
  urlSite: "https://www.saintleonard.edu.ht",
  urlPlateforme: "https://app.saintleonard.edu.ht",
  slogan: A_FOURNIR,
  anneeInscriptions: "2027-2028",
  etatInscriptions: A_FOURNIR,
  contact: {
    whatsapp: A_FOURNIR,
    telephone: A_FOURNIR,
    adresse: A_FOURNIR,
  },
};

export const navigation: LienNavigation[] = [
  { libelle: "Accueil", href: "/" },
  { libelle: "À propos", href: "/a-propos/" },
  { libelle: "Programmes", href: "/programmes/" },
  { libelle: "Admissions", href: "/admissions/" },
  { libelle: "Actualités", href: "/actualites/" },
  { libelle: "Contact", href: "/contact/" },
];
