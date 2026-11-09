import { BadgeInscriptions } from "@/components/ui/badge-inscriptions";
import { LienBouton } from "@/components/ui/lien-bouton";
import { site } from "@/content/site";
import { lienWhatsApp } from "@/lib/contact";

export function AppelInscription() {
  const { whatsapp } = site.contact;
  return (
    <section aria-labelledby="titre-inscription" className="bg-primary-800 text-primary-50">
      <div className="container px-4 sm:px-6 lg:px-8 flex flex-col gap-6 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <BadgeInscriptions className="mb-3" />
          <h2 id="titre-inscription" className="heading-2">
            Inscriptions {site.anneeInscriptions}
          </h2>
          <p className="mt-2 max-w-xl text-primary-100">
            Calendrier, pièces à fournir et démarches : tout est sur la page Admissions.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <LienBouton href="/admissions/" variante="secondaire">
            Voir les admissions
          </LienBouton>
          {whatsapp ? (
            <LienBouton
              href={lienWhatsApp(whatsapp, `Bonjour, je souhaite des informations sur les inscriptions ${site.anneeInscriptions}.`)}
              variante="succes"
              externe
            >
              Écrire sur WhatsApp
            </LienBouton>
          ) : null}
        </div>
      </div>
    </section>
  );
}
