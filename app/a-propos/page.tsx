import type { Metadata } from "next";
import { EnPreparation } from "@/components/layout/en-preparation";
import { PageTitle } from "@/components/layout/page-title";

export const metadata: Metadata = { title: "À propos" };

export default function Page() {
  return (
    <>
      <PageTitle titre="À propos" />
      <section className="container py-10">
        <EnPreparation quoi="histoire, mission, vision, reconnaissance MENFP, infrastructures" />
      </section>
    </>
  );
}
