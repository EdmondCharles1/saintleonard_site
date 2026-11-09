import type { Metadata } from "next";
import { PageTitle } from "@/components/layout/page-title";
import { LienBouton } from "@/components/ui/lien-bouton";
import { examensOfficiels, filieres, ordres } from "@/content/programmes";

export const metadata: Metadata = {
  title: "Programmes",
  description: "École fondamentale de la 1re à la 9e AF et Nouveau Secondaire de la NS1 à la NS4.",
};

export default function Programmes() {
  return (
    <>
      <PageTitle
        titre="Programmes"
        chapeau="Le programme officiel du MENFP, de la 1re année fondamentale à la NS4."
      />

      {ordres.map((o) => (
        <section key={o.id} aria-labelledby={`titre-${o.id}`} className="container px-4 sm:px-6 lg:px-8 py-10">
          <h2 id={`titre-${o.id}`} className="heading-2 text-primary-800">
            {o.nom}
          </h2>
          <p className="mt-2 text-muted-foreground">{o.resume}</p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {o.cycles.map((c) => (
              <article key={c.id} className="rounded-lg border bg-card p-5">
                <h3 className="heading-4 text-primary-800">{c.nom}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.resume}</p>
                <ul className="mt-4 space-y-1">
                  {c.niveaux.map((n) => (
                    <li key={n.code}>
                      <abbr title={n.libelle} className="no-underline">
                        {n.code}
                      </abbr>
                      <span className="sr-only"> : {n.libelle}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      ))}

      <section aria-labelledby="titre-filieres" className="bg-secondary-50">
        <div className="container px-4 sm:px-6 lg:px-8 py-10">
          <h2 id="titre-filieres" className="heading-2 text-primary-800">
            Filières en NS3 et NS4
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {filieres.map((f) => (
              <li key={f.sigle} className="rounded-lg border bg-card p-5">
                <p className="font-serif text-2xl font-bold text-primary-700">{f.sigle}</p>
                <p className="mt-1">{f.nom}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="titre-examens" className="container px-4 sm:px-6 lg:px-8 py-10">
        <h2 id="titre-examens" className="heading-2 text-primary-800">
          Examens officiels
        </h2>
        <ul className="mt-4 list-disc space-y-1 pl-6">
          {examensOfficiels.map((e) => (
            <li key={e.niveau}>{e.libelle}</li>
          ))}
        </ul>
        <div className="mt-8">
          <LienBouton href="/admissions/">Inscriptions et admissions</LienBouton>
        </div>
      </section>
    </>
  );
}
