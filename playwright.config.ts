import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  reporter: "list",
  use: {
    baseURL: "http://localhost:4173",
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"], channel: process.env.PW_CHANNEL }  }],
  webServer: {
    command: "node scripts/serve-out.mjs 4173",
    url: "http://localhost:4173",
    reuseExistingServer: false,
  },
});
