import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const PAGES = ["/", "/a-propos/", "/programmes/", "/admissions/", "/actualites/", "/contact/", "/page-inexistante/"];
const ECRANS = [
  { nom: "mobile", width: 390, height: 844 },
  { nom: "bureau", width: 1280, height: 900 },
];

for (const ecran of ECRANS) {
  for (const chemin of PAGES) {
    test(`WCAG 2.2 AA (${ecran.nom}) : ${chemin}`, async ({ page }) => {
      await page.setViewportSize({ width: ecran.width, height: ecran.height });
      await page.goto(chemin);
      const resultat = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
        .analyze();
      const resume = resultat.violations.map((v) => `${v.id} (${v.impact}) : ${v.nodes.length} élément(s)`);
      expect(resume).toEqual([]);
    });
  }
}

test("Lien d'évitement : premier élément focalisable, mène au contenu", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  const lien = page.getByRole("link", { name: "Aller au contenu" });
  await expect(lien).toBeFocused();
  await expect(lien).toBeVisible();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#contenu$/);
});
