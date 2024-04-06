import { chromium } from "playwright-core";

(async () => {
  const browser = await chromium.launch({
    channel: "chrome",
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto("https://www.google.co.jp/");
  await page.screenshot({ path: `tmp/sample.png` });
  await browser.close();
})();
