import { EnPreparation } from "@/components/layout/en-preparation";
import { CarteActualite } from "@/components/ui/carte-actualite";
import { LienBouton } from "@/components/ui/lien-bouton";
import { actualitesRecentes } from "@/content/actualites";

export function DernieresActualites() {
  const liste = actualitesRecentes(3);
  return (
    <section aria-labelledby="titre-actualites" className="container px-4 sm:px-6 lg:px-8 py-12">
      <h2 id="titre-actualites" className="heading-2 text-primary-800">
        Actualités
      </h2>
      {liste.length === 0 ? (
        <div className="mt-8">
          <EnPreparation quoi="les trois premières actualités" />
        </div>
      ) : (
        <>
          <ul className="mt-8 grid gap-6 md:grid-cols-3">
            {liste.map((a) => (
              <li key={a.slug}>
                <CarteActualite actualite={a} />
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <LienBouton href="/actualites/" variante="secondaire">
              Toutes les actualités
            </LienBouton>
          </div>
        </>
      )}
    </section>
  );
}
