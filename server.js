const { preview } = require("vite");
const puppeteer = require("puppeteer");

(async () => {
  const serve = await preview({
    preview: {
      port: 8080,
    },
  });
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--font-render-hinting=none"],
  });
  const page = await browser.newPage();
  await page.goto("http://localhost:8080", {
    waitUntil: "networkidle2",
  });
  await page.evaluate(() => {
    const toremove = document.querySelector("#download");

    toremove.parentNode.removeChild(toremove);
  });

  await page.pdf({ path: "dist/cv.pdf", format: "a4", scale: 0.8 });
  await browser.close();
  await serve.httpServer.close();
})();
