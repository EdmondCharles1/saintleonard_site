import type { Metadata } from "next";
import { EnPreparation } from "@/components/layout/en-preparation";
import { PageTitle } from "@/components/layout/page-title";

export const metadata: Metadata = { title: "Admissions" };

export default function Page() {
  return (
    <>
      <PageTitle titre="Admissions" />
      <section className="container px-4 sm:px-6 lg:px-8 py-10">
        <EnPreparation quoi="calendrier 2027-2028 et pièces à fournir" />
      </section>
    </>
  );
}
