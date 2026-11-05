const { test, expect } = require("@playwright/test");

test("Homepage loads successfully", async ({ page }) => {
  const response = await page.goto("https://bielektra.com/");

  expect(response).not.toBeNull();
  expect(response.ok()).toBeTruthy();

  await expect(page.locator("body")).toBeVisible();
});
