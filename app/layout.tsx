import type { Metadata } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SkipLink } from "@/components/layout/skip-link";
import { site } from "@/content/site";
import "./globals.css";

// Mêmes polices que la plateforme (D-05). Cookie et Lobster ne servent qu'au
// bulletin imprimé de la plateforme : absentes ici.
const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.urlSite),
  title: {
    default: site.nom,
    template: `%s | ${site.sigle}`,
  },
  description:
    "Cours Privé Mixte Saint-Léonard : école fondamentale et secondaire, de la 1re AF à la NS4.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className={`${libreBaskerville.variable} ${inter.variable} flex min-h-screen flex-col`}>
        <SkipLink />
        <SiteHeader />
        <main id="contenu" tabIndex={-1} className="flex-1 focus:outline-none">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
