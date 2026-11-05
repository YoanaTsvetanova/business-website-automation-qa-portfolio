const { test, expect } = require("@playwright/test");

const pages = [
  { name: "Homepage", url: "https://bielektra.com/" },
  { name: "About Us", url: "https://bielektra.com/za-nas" },
  { name: "Services", url: "https://bielektra.com/uslugi" },
  { name: "Projects", url: "https://bielektra.com/proekti" },
  { name: "Contacts", url: "https://bielektra.com/kontakti" },
];

for (const websitePage of pages) {
  test(`${websitePage.name} page loads successfully`, async ({ page }) => {
    const response = await page.goto(websitePage.url);

    expect(response).not.toBeNull();
    expect(response.ok()).toBeTruthy();

    await expect(page.locator("body")).toBeVisible();
  });
}
