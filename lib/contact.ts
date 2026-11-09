/** Lien WhatsApp officiel (wa.me) à partir d'un numéro international sans espaces. */
export function lienWhatsApp(numero: string, message?: string): string {
  const base = `https://wa.me/${numero.replace(/\D/g, "")}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Lien tel: à partir d'un numéro affiché, ex. « +509 3700-0000 ». */
export function lienTelephone(numeroAffiche: string): string {
  return `tel:${numeroAffiche.replace(/[^\d+]/g, "")}`;
}
