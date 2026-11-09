import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="heading-1 text-primary-800">Page introuvable</h1>
      <p className="mt-4">
        <Link href="/" className="text-primary underline">Retour à l&apos;accueil</Link>
      </p>
    </section>
  );
}
