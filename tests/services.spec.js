import { test, expect } from "@playwright/test";

test("Services page displays the correct heading", async ({ page }) => {
  await page.goto("https://bielektra.com/");

  await page
    .getByRole("navigation", { name: "Меню" })
    .getByRole("link", { name: "Услуги" })
    .click();

  await expect(page.locator("h1")).toHaveText("Услуги");
});
