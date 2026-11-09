/** Repère visible tant que le contenu n'est pas fourni. Bloque la mise en ligne (contrôle à venir). */
export function EnPreparation({ quoi }: { quoi: string }) {
  return (
    <div
      data-a-fournir
      className="rounded-lg border border-warning-border bg-warning-soft p-4 text-warning-ink"
    >
      Contenu en préparation : {quoi}.
    </div>
  );
}
