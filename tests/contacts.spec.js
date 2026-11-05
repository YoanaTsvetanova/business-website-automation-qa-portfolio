import { test, expect } from "@playwright/test";

test("Contacts page displays the correct heading", async ({ page }) => {
  await page.goto("https://bielektra.com/");

  await page
    .getByRole("navigation", { name: "Меню" })
    .getByRole("link", { name: "Контакти" })
    .click();

  await expect(page.locator("h1")).toHaveText("Контакти");
});
