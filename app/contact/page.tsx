import type { Metadata } from "next";
import { EnPreparation } from "@/components/layout/en-preparation";
import { PageTitle } from "@/components/layout/page-title";

export const metadata: Metadata = { title: "Contact" };

export default function Page() {
  return (
    <>
      <PageTitle titre="Contact" />
      <section className="container py-10">
        <EnPreparation quoi="WhatsApp, téléphone et plan d'accès" />
      </section>
    </>
  );
}
