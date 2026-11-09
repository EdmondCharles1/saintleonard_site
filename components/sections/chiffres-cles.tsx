import { chiffresCles } from "@/content/accueil";

export function ChiffresCles({ anneeCourante }: { anneeCourante: number }) {
  const chiffres = chiffresCles(anneeCourante);
  return (
    <section aria-labelledby="titre-chiffres" className="container px-4 sm:px-6 lg:px-8 py-12">
      <h2 id="titre-chiffres" className="heading-2 text-primary-800">
        L&apos;école en chiffres
      </h2>
      <dl className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {chiffres.map((c) => (
          <div key={c.libelle} className="flex flex-col rounded-lg border bg-card p-5">
            <dt className="text-sm text-muted-foreground">{c.libelle}</dt>
            <dd className="order-first font-serif text-3xl font-bold text-primary-700">
              {c.valeur ?? (
                <span data-a-fournir className="text-base font-normal text-warning-ink">
                  À fournir
                </span>
              )}
            </dd>
            {c.source && c.valeur ? <dd className="mt-1 text-xs text-muted-foreground">Source : {c.source}</dd> : null}
          </div>
        ))}
      </dl>
    </section>
  );
}
