import type { Metadata } from "next";
import { EnPreparation } from "@/components/layout/en-preparation";
import { PageTitle } from "@/components/layout/page-title";
import { CarteActualite } from "@/components/ui/carte-actualite";
import { actualitesRecentes, actualites } from "@/content/actualites";

export const metadata: Metadata = {
  title: "Actualités",
  description: "Les dernières nouvelles du Cours Privé Mixte Saint-Léonard.",
};

export default function Actualites() {
  const liste = actualitesRecentes(actualites.length);
  return (
    <>
      <PageTitle titre="Actualités" chapeau="La vie de l'école." />
      <section aria-label="Liste des actualités" className="container px-4 py-10 sm:px-6 lg:px-8">
        {liste.length === 0 ? (
          <EnPreparation quoi="les trois premières actualités" />
        ) : (
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {liste.map((a) => (
              <li key={a.slug}>
                <CarteActualite actualite={a} />
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
