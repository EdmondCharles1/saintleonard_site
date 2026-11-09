import Link from "next/link";
import { navigation, site } from "@/content/site";

/**
 * En-tête sans JavaScript client : le menu mobile utilise <details>,
 * ce qui garde la page légère et compatible avec la CSP stricte.
 */
export function SiteHeader() {
  return (
    <header className="border-b bg-background">
      <div className="container flex items-center justify-between gap-4 py-3">
        <Link href="/" className="font-serif text-lg font-bold text-primary-700">
          {site.sigle}
          <span className="sr-only"> : {site.nom}, accueil</span>
        </Link>

        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {navigation.map((lien) => (
              <li key={lien.href}>
                <Link href={lien.href} className="label-ui text-foreground hover:text-primary">
                  {lien.libelle}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.urlPlateforme}
            className="label-ui rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary-600"
          >
            Se connecter
          </a>

          <details className="relative lg:hidden">
            <summary className="label-ui cursor-pointer list-none rounded-md border px-3 py-2">
              Menu
            </summary>
            <nav
              aria-label="Navigation principale (mobile)"
              className="absolute right-0 z-40 mt-2 w-56 rounded-lg border bg-card p-2 shadow-md"
            >
              <ul>
                {navigation.map((lien) => (
                  <li key={lien.href}>
                    <Link
                      href={lien.href}
                      className="block rounded-md px-3 py-2 text-foreground hover:bg-muted"
                    >
                      {lien.libelle}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
