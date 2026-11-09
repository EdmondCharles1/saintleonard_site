import { cn } from "@/lib/cn";

interface SectionProps {
  id: string;
  titre: string;
  fond?: "clair" | "beige";
  children: React.ReactNode;
}

/** Section de page titrée : un <h2> relié par aria-labelledby. */
export function Section({ id, titre, fond = "clair", children }: SectionProps) {
  return (
    <section aria-labelledby={`titre-${id}`} className={cn(fond === "beige" && "bg-secondary-50")}>
      <div className="container px-4 py-10 sm:px-6 lg:px-8">
        <h2 id={`titre-${id}`} className="heading-2 text-primary-800">
          {titre}
        </h2>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}
