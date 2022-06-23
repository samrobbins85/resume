import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import puppeteer from "puppeteer";
const generatePDF = () => ({
  name: "reload",
  configureServer(server) {
    server.watcher.on("change", async (path) => {
      if (!path.endsWith(".pdf")) {
        const browser = await puppeteer.launch({
          args: ["--no-sandbox", "--font-render-hinting=none"],
        });
        const page = await browser.newPage();
        await page.goto("http://localhost:3000", {
          waitUntil: "networkidle2",
        });
        await page.evaluate(() => {
          const toremove = document.querySelector("#download");

          toremove.parentNode.removeChild(toremove);
        });

        await page.pdf({ path: "cv.pdf", format: "a4", scale: 0.8 });
        await browser.close();
      }
    });
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), generatePDF()],
});
