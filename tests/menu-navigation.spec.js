import { test, expect } from "@playwright/test";

test("Main navigation menu opens the correct pages", async ({ page }) => {
  await page.goto("https://bielektra.com/");

  const menu = page.getByRole("navigation", { name: "Меню" });

  const pages = ["За нас", "Услуги", "Проекти", "Контакти", "Начало"];

  for (const pageName of pages) {
    const link = menu.getByRole("link", { name: pageName });

    const href = await link.getAttribute("href");

    expect(href, `The "${pageName}" link should have an href`).toBeTruthy();

    const expectedUrl = new URL(href, page.url()).href;

    await link.click();

    await expect(page).toHaveURL(expectedUrl);
  }
});
