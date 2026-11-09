import type { Filiere, Ordre } from "./types";

/**
 * Structure officielle MENFP : fondamental de 9 ans en trois cycles (4, 2 et
 * 3 ans), puis Nouveau Secondaire de 4 ans. CPMSL n'a pas de préscolaire.
 */
export const ordres: Ordre[] = [
  {
    id: "fondamental",
    nom: "École fondamentale",
    resume: "De la 1re à la 9e année fondamentale, en trois cycles.",
    cycles: [
      {
        id: "cycle-1",
        nom: "1er cycle",
        resume: "Les bases : lecture, écriture et calcul.",
        niveaux: [
          { code: "1re AF", libelle: "1re année fondamentale" },
          { code: "2e AF", libelle: "2e année fondamentale" },
          { code: "3e AF", libelle: "3e année fondamentale" },
          { code: "4e AF", libelle: "4e année fondamentale" },
        ],
      },
      {
        id: "cycle-2",
        nom: "2e cycle",
        resume: "L'approfondissement des apprentissages fondamentaux.",
        niveaux: [
          { code: "5e AF", libelle: "5e année fondamentale" },
          { code: "6e AF", libelle: "6e année fondamentale" },
        ],
      },
      {
        id: "cycle-3",
        nom: "3e cycle",
        resume: "La préparation aux examens officiels de 9e AF.",
        niveaux: [
          { code: "7e AF", libelle: "7e année fondamentale" },
          { code: "8e AF", libelle: "8e année fondamentale" },
          { code: "9e AF", libelle: "9e année fondamentale" },
        ],
      },
    ],
  },
  {
    id: "secondaire",
    nom: "Nouveau Secondaire",
    resume: "De la NS1 à la NS4, avec une filière au choix en NS3 et NS4.",
    cycles: [
      {
        id: "ns",
        nom: "NS1 à NS4",
        resume: "Tronc commun en NS1 et NS2, puis filière en NS3 et NS4.",
        niveaux: [
          { code: "NS1", libelle: "Nouveau Secondaire 1" },
          { code: "NS2", libelle: "Nouveau Secondaire 2" },
          { code: "NS3", libelle: "Nouveau Secondaire 3" },
          { code: "NS4", libelle: "Nouveau Secondaire 4" },
        ],
      },
    ],
  },
];

export const filieres: Filiere[] = [
  { sigle: "LLA", nom: "Lettres, Langues et Arts" },
  { sigle: "SES", nom: "Sciences Économiques et Sociales" },
  { sigle: "SMP", nom: "Sciences Mathématiques et Physiques" },
  { sigle: "SVT", nom: "Sciences de la Vie et de la Terre" },
];

export const examensOfficiels = [
  { niveau: "9e AF", libelle: "Examens officiels de 9e année fondamentale" },
  { niveau: "NS4", libelle: "Examens officiels de NS4" },
];
