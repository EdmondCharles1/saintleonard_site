const FORMAT_LONG = new Intl.DateTimeFormat("fr-FR", { dateStyle: "long", timeZone: "UTC" });

/** « 2026-11-09 » → « 9 novembre 2026 ». */
export function dateLongue(iso: string): string {
  return FORMAT_LONG.format(new Date(`${iso}T00:00:00Z`));
}
