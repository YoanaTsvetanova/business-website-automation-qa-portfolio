import { test, expect } from "@playwright/test";

const viewports = [
  { name: "Desktop", width: 1920, height: 1080 },
  { name: "Tablet", width: 768, height: 1024 },
  { name: "Mobile", width: 375, height: 812 },
];

const pages = [
  { name: "Homepage", path: "/" },
  { name: "About Us", path: "/za-nas/" },
  { name: "Services", path: "/uslugi/" },
  { name: "Projects", path: "/proekti/" },
  { name: "Contacts", path: "/kontakti/" },
];

for (const viewport of viewports) {
  for (const pageInfo of pages) {
    test(`No horizontal scrolling on ${pageInfo.name} - ${viewport.name}`, async ({
      page,
    }) => {
      await page.setViewportSize({
        width: viewport.width,
        height: viewport.height,
      });

      await page.goto(`https://bielektra.com${pageInfo.path}`);

      const hasHorizontalScroll = await page.evaluate(() => {
        return (
          document.documentElement.scrollWidth >
          document.documentElement.clientWidth
        );
      });

      expect(hasHorizontalScroll).toBe(false);
    });
  }
}
