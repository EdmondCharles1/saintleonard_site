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
