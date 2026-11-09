import Link from "next/link";
import { navigation, site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t bg-secondary-50">
      <div className="container px-4 sm:px-6 lg:px-8 grid gap-6 py-8 sm:grid-cols-2">
        <div>
          <p className="font-serif font-bold text-primary-700">{site.nom}</p>
          <p className="text-sm text-muted-foreground">Reconnu par le MENFP</p>
        </div>
        <nav aria-label="Pied de page">
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {navigation.map((lien) => (
              <li key={lien.href}>
                <Link href={lien.href} className="hover:text-primary">
                  {lien.libelle}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="container px-4 sm:px-6 lg:px-8 pb-6 text-xs text-muted-foreground">
        © {new Date().getFullYear()} {site.nom}
      </p>
    </footer>
  );
}
