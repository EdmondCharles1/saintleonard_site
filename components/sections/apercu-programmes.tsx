import { LienBouton } from "@/components/ui/lien-bouton";
import { ordres } from "@/content/programmes";

export function ApercuProgrammes() {
  return (
    <section aria-labelledby="titre-programmes" className="bg-secondary-50">
      <div className="container px-4 sm:px-6 lg:px-8 py-12">
        <h2 id="titre-programmes" className="heading-2 text-primary-800">
          Nos programmes
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {ordres.map((o) => (
            <article key={o.id} className="rounded-lg border bg-card p-6">
              <h3 className="heading-3 text-primary-800">{o.nom}</h3>
              <p className="mt-2 text-muted-foreground">{o.resume}</p>
              <p className="label-ui mt-4 text-primary-700">
                {o.cycles.flatMap((c) => c.niveaux).map((n) => n.code).join(" · ")}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <LienBouton href="/programmes/" variante="secondaire">
            Voir les programmes
          </LienBouton>
        </div>
      </div>
    </section>
  );
}
