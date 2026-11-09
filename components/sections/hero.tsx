import { EnPreparation } from "@/components/layout/en-preparation";
import { BadgeInscriptions } from "@/components/ui/badge-inscriptions";
import { LienBouton } from "@/components/ui/lien-bouton";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section aria-labelledby="titre-accueil" className="border-b bg-secondary-50">
      <div className="container px-4 sm:px-6 lg:px-8 grid items-center gap-10 py-12 lg:grid-cols-2 lg:py-16">
        <div>
          <BadgeInscriptions className="mb-4" />
          <h1 id="titre-accueil" className="heading-1 text-primary-800">
            {site.nom}
          </h1>
          {site.slogan ? (
            <p className="mt-4 font-serif text-xl italic text-primary-700">{site.slogan}</p>
          ) : (
            <div className="mt-4">
              <EnPreparation quoi="slogan" />
            </div>
          )}
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">
            École fondamentale et Nouveau Secondaire, de la 1re AF à la NS4, reconnue par le MENFP.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <LienBouton href="/admissions/">Inscriptions {site.anneeInscriptions}</LienBouton>
            <LienBouton href="/contact/" variante="secondaire">
              Nous contacter
            </LienBouton>
          </div>
        </div>
        <div className="flex aspect-[4/3] items-center justify-center rounded-lg border bg-muted p-6">
          <EnPreparation quoi="photo de la façade de l'école" />
        </div>
      </div>
    </section>
  );
}
