import type { Metadata } from "next";
import { EnPreparation } from "@/components/layout/en-preparation";
import { PageTitle } from "@/components/layout/page-title";
import { Section } from "@/components/layout/section";
import { Coordonnees } from "@/components/sections/coordonnees";
import { BadgeInscriptions } from "@/components/ui/badge-inscriptions";
import { calendrier, mentionFrais, pieces } from "@/content/admissions";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Admissions",
  description: `Inscriptions ${site.anneeInscriptions} au Cours Privé Mixte Saint-Léonard : calendrier, pièces à fournir et contact.`,
};

export default function Admissions() {
  return (
    <>
      <PageTitle
        titre="Admissions"
        chapeau={`Inscriptions pour l'année scolaire ${site.anneeInscriptions}, de la 1re AF à la NS4.`}
      />
      {site.etatInscriptions !== null ? (
        <div className="container px-4 pt-6 sm:px-6 lg:px-8">
          <BadgeInscriptions />
        </div>
      ) : null}
      <Section id="calendrier" titre="Calendrier des inscriptions">
        {calendrier === null || calendrier.length === 0 ? (
          <EnPreparation quoi={`calendrier des inscriptions ${site.anneeInscriptions}`} />
        ) : (
          <ol className="max-w-3xl space-y-3">
            {calendrier.map((e) => (
              <li key={e.libelle} className="rounded-lg border bg-card p-4">
                <p className="label-ui text-primary-700">{e.periode}</p>
                <p className="mt-1">{e.libelle}</p>
              </li>
            ))}
          </ol>
        )}
      </Section>
      <Section id="pieces" titre="Pièces à fournir" fond="beige">
        {pieces === null || pieces.length === 0 ? (
          <EnPreparation quoi="liste des pièces à fournir" />
        ) : (
          <ul className="max-w-3xl list-disc space-y-1 pl-6">
            {pieces.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        )}
      </Section>
      <Section id="contact-admissions" titre="Nous contacter pour une inscription">
        <p className="mb-6 max-w-3xl text-muted-foreground">{mentionFrais}</p>
        <Coordonnees messageWhatsApp={`Bonjour, je souhaite des informations sur les inscriptions ${site.anneeInscriptions}.`} />
      </Section>
    </>
  );
}
