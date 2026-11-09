import { EnPreparation } from "@/components/layout/en-preparation";

/** Affiche des paragraphes, ou le repère « en préparation » s'ils manquent. */
export function Paragraphes({ textes, quoi }: { textes: string[] | null; quoi: string }) {
  if (textes === null || textes.length === 0) return <EnPreparation quoi={quoi} />;
  return (
    <div className="max-w-3xl space-y-4">
      {textes.map((t) => (
        <p key={t}>{t}</p>
      ))}
    </div>
  );
}
