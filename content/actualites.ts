import type { Actualite } from "./types";

/** Les plus récentes en premier. Les 3 premières sont À FOURNIR par l'école. */
export const actualites: Actualite[] = [];

export function actualitesRecentes(nombre: number): Actualite[] {
  return [...actualites].sort((a, b) => b.date.localeCompare(a.date)).slice(0, nombre);
}
