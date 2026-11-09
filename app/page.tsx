import { ApercuProgrammes } from "@/components/sections/apercu-programmes";
import { AppelInscription } from "@/components/sections/appel-inscription";
import { ChiffresCles } from "@/components/sections/chiffres-cles";
import { DernieresActualites } from "@/components/sections/dernieres-actualites";
import { Hero } from "@/components/sections/hero";

export default function Accueil() {
  // Calculé au build : le site statique est reconstruit à chaque publication.
  const anneeCourante = new Date().getFullYear();
  return (
    <>
      <Hero />
      <ChiffresCles anneeCourante={anneeCourante} />
      <ApercuProgrammes />
      <DernieresActualites />
      <AppelInscription />
    </>
  );
}
