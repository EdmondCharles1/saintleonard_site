import type { Metadata } from "next";
import { EnPreparation } from "@/components/layout/en-preparation";
import { PageTitle } from "@/components/layout/page-title";

export const metadata: Metadata = { title: "Programmes" };

export default function Page() {
  return (
    <>
      <PageTitle titre="Programmes" />
      <section className="container py-10">
        <EnPreparation quoi="niveaux de la 1re AF à la NS4, filières et examens officiels" />
      </section>
    </>
  );
}
