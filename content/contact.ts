import { A_FOURNIR, type ImageLocale } from "./types";

/**
 * Plan d'accès : image statique (pas d'iframe de carte, CSP frame-src 'none').
 * Si la carte vient d'OpenStreetMap, la mention « © OpenStreetMap » est obligatoire.
 */
export const plan: { image: ImageLocale; credit: string; lienItineraire?: string } | null = A_FOURNIR;
