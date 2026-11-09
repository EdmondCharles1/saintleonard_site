import type { Metadata } from "next";
import { EnPreparation } from "@/components/layout/en-preparation";
import { PageTitle } from "@/components/layout/page-title";
import { Section } from "@/components/layout/section";
import { ImageLocale } from "@/components/ui/image-locale";
import { Paragraphes } from "@/components/ui/paragraphes";
import { histoire, infrastructures, mission, reconnaissance, vision } from "@/content/a-propos";

export const metadata: Metadata = {
  title: "À propos",
  description: "Histoire, mission et vision du Cours Privé Mixte Saint-Léonard, école reconnue par le MENFP.",
};

export default function APropos() {
  return (
    <>
      <PageTitle titre="À propos" chapeau="Notre histoire, notre mission et nos installations." />
      <Section id="histoire" titre="Notre histoire">
        <Paragraphes textes={histoire} quoi="histoire de l'école" />
      </Section>
      <Section id="mission" titre="Mission et vision" fond="beige">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="heading-3 text-primary-800">Mission</h3>
            <div className="mt-3">
              <Paragraphes textes={mission} quoi="mission" />
            </div>
          </div>
          <div>
            <h3 className="heading-3 text-primary-800">Vision</h3>
            <div className="mt-3">
              <Paragraphes textes={vision} quoi="vision" />
            </div>
          </div>
        </div>
      </Section>
      <Section id="reconnaissance" titre="Reconnaissance officielle">
        <p className="max-w-3xl">{reconnaissance}</p>
      </Section>
      <Section id="infrastructures" titre="Nos installations" fond="beige">
        {infrastructures === null || infrastructures.length === 0 ? (
          <EnPreparation quoi="installations et photos des bâtiments" />
        ) : (
          <ul className="grid gap-6 md:grid-cols-3">
            {infrastructures.map((i) => (
              <li key={i.nom} className="overflow-hidden rounded-lg border bg-card">
                {i.image ? <ImageLocale image={i.image} className="aspect-[4/3]" /> : null}
                <div className="p-5">
                  <h3 className="heading-4 text-primary-800">{i.nom}</h3>
                  <p className="mt-1 text-muted-foreground">{i.description}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </Section>
    </>
  );
}
