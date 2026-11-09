import { expect, test } from "@playwright/test";

const PAGES = ["/", "/a-propos/", "/programmes/", "/admissions/", "/actualites/", "/contact/"];

for (const page of PAGES) {
  test(`CSP : aucune violation sur ${page}`, async ({ page: p }) => {
    const violations: string[] = [];
    p.on("console", (msg) => {
      if (/Content Security Policy|Content-Security-Policy/i.test(msg.text())) violations.push(msg.text());
    });
    p.on("pageerror", (err) => violations.push(err.message));

    const reponse = await p.goto(page);
    expect(reponse?.status()).toBe(200);
    expect(reponse?.headers()["content-security-policy"]).toContain("frame-ancestors 'none'");
    await expect(p.locator('meta[http-equiv="Content-Security-Policy"]')).toHaveCount(1);
    await p.waitForLoadState("networkidle");
    expect(violations).toEqual([]);
  });
}

test("Navigation côté client sans violation CSP", async ({ page }) => {
  const violations: string[] = [];
  page.on("console", (msg) => {
    if (/Content Security Policy/i.test(msg.text())) violations.push(msg.text());
  });
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto("/");
  await page.waitForLoadState("networkidle");
  // Repère posé avant le clic : il survit seulement si la navigation se fait
  // côté client, donc si React a bien démarré malgré la CSP.
  await page.evaluate(() => ((window as unknown as { __repere?: boolean }).__repere = true));
  await page.getByRole("navigation", { name: "Navigation principale", exact: true }).getByRole("link", { name: "Programmes" }).click();
  await expect(page).toHaveURL(/\/programmes\/$/);
  await expect(page.getByRole("heading", { level: 1, name: "Programmes" })).toBeVisible();
  expect(await page.evaluate(() => (window as unknown as { __repere?: boolean }).__repere)).toBe(true);
  expect(violations).toEqual([]);
});

test("Un script injecté est bloqué par la CSP", async ({ page }) => {
  const violations: string[] = [];
  page.on("console", (msg) => {
    if (/Content Security Policy/i.test(msg.text())) violations.push(msg.text());
  });
  await page.goto("/");
  await page.evaluate(() => {
    const s = document.createElement("script");
    s.textContent = "window.__injecte = true;";
    document.body.appendChild(s);
  });
  expect(await page.evaluate(() => (window as unknown as { __injecte?: boolean }).__injecte)).toBeUndefined();
  expect(violations.length).toBeGreaterThan(0);
});

test("Accueil : les cinq sections sont présentes", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Cours Privé Mixte Saint-Léonard");
  for (const titre of ["L'école en chiffres", "Nos programmes", "Actualités", "Inscriptions 2027-2028"]) {
    await expect(page.getByRole("heading", { level: 2, name: titre })).toBeVisible();
  }
  await expect(page.getByRole("link", { name: "Se connecter" })).toHaveAttribute("href", "https://app.saintleonard.edu.ht");
});

test("Programmes : 13 niveaux, 4 filières, 2 examens officiels", async ({ page }) => {
  await page.goto("/programmes/");
  await expect(page.locator("abbr")).toHaveCount(13);
  for (const sigle of ["LLA", "SES", "SMP", "SVT"]) {
    await expect(page.getByText(sigle, { exact: true })).toBeVisible();
  }
  await expect(page.getByText(/^Examens officiels de/)).toHaveCount(2);
});

const SECTIONS: Record<string, string[]> = {
  "/a-propos/": ["Notre histoire", "Mission et vision", "Reconnaissance officielle", "Nos installations"],
  "/admissions/": ["Calendrier des inscriptions", "Pièces à fournir", "Nous contacter pour une inscription"],
  "/contact/": ["Coordonnées", "Plan d'accès"],
};

for (const [chemin, titres] of Object.entries(SECTIONS)) {
  test(`${chemin} : sections attendues`, async ({ page }) => {
    await page.goto(chemin);
    for (const titre of titres) {
      await expect(page.getByRole("heading", { level: 2, name: titre })).toBeVisible();
    }
  });
}

test("Aucun lien mailto en V1 (pas d'adresse courriel)", async ({ page }) => {
  for (const chemin of ["/", "/a-propos/", "/programmes/", "/admissions/", "/actualites/", "/contact/"]) {
    await page.goto(chemin);
    await expect(page.locator('a[href^="mailto:"]')).toHaveCount(0);
  }
});
