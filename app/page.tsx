import { EnPreparation } from "@/components/layout/en-preparation";
import { site } from "@/content/site";

export default function Accueil() {
  return (
    <section className="container py-16">
      <h1 className="heading-1 text-primary-800">{site.nom}</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        École fondamentale et secondaire, de la 1re AF à la NS4.
      </p>
      <div className="mt-8">
        <EnPreparation quoi="photo, slogan, chiffres clés, aperçu des cycles, actualités et appel à l'inscription" />
      </div>
    </section>
  );
}
