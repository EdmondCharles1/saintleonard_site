import type { Metadata } from "next";
import { EnPreparation } from "@/components/layout/en-preparation";
import { PageTitle } from "@/components/layout/page-title";
import { Section } from "@/components/layout/section";
import { Coordonnees } from "@/components/sections/coordonnees";
import { ImageLocale } from "@/components/ui/image-locale";
import { LienBouton } from "@/components/ui/lien-bouton";
import { plan } from "@/content/contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contacter le Cours Privé Mixte Saint-Léonard par WhatsApp ou par téléphone.",
};

export default function Contact() {
  return (
    <>
      <PageTitle titre="Contact" chapeau="Écrivez-nous sur WhatsApp ou appelez-nous." />
      <Section id="coordonnees" titre="Coordonnées">
        <Coordonnees messageWhatsApp="Bonjour, je souhaite contacter le Cours Privé Mixte Saint-Léonard." />
      </Section>
      <Section id="plan" titre="Plan d'accès" fond="beige">
        {plan === null ? (
          <EnPreparation quoi="plan d'accès" />
        ) : (
          <figure className="max-w-3xl">
            <ImageLocale image={plan.image} className="rounded-lg border" />
            <figcaption className="mt-2 text-xs text-muted-foreground">{plan.credit}</figcaption>
            {plan.lienItineraire ? (
              <div className="mt-4">
                <LienBouton href={plan.lienItineraire} variante="secondaire" externe>
                  Ouvrir l&apos;itinéraire
                </LienBouton>
              </div>
            ) : null}
          </figure>
        )}
      </Section>
    </>
  );
}
