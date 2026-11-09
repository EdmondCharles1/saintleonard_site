import { ImageLocale } from "@/components/ui/image-locale";
import type { Actualite } from "@/content/types";
import { dateLongue } from "@/lib/dates";

export function CarteActualite({ actualite }: { actualite: Actualite }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border bg-card">
      {actualite.image ? <ImageLocale image={actualite.image} className="aspect-[16/9]" /> : null}
      <div className="flex flex-1 flex-col gap-2 p-5">
        <time dateTime={actualite.date} className="text-xs text-muted-foreground">
          {dateLongue(actualite.date)}
        </time>
        <h3 className="heading-4 text-primary-800">{actualite.titre}</h3>
        <p className="text-muted-foreground">{actualite.resume}</p>
      </div>
    </article>
  );
}
