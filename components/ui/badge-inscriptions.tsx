import { site } from "@/content/site";
import { cn } from "@/lib/cn";

/** Masqué tant que l'école n'a pas fixé l'état des inscriptions. */
export function BadgeInscriptions({ className }: { className?: string }) {
  if (site.etatInscriptions === null) return null;
  const ouvertes = site.etatInscriptions === "ouvertes";
  return (
    <span
      className={cn(
        "label-ui inline-flex items-center rounded-full border px-3 py-1",
        ouvertes ? "border-success-border bg-success-soft text-success-ink" : "border-border bg-muted text-muted-foreground",
        className,
      )}
    >
      Inscriptions {site.anneeInscriptions} : {ouvertes ? "ouvertes" : "fermées"}
    </span>
  );
}
