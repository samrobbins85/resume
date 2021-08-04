/* eslint-disable import/no-extraneous-dependencies */
const puppeteer = require("puppeteer");
const handler = require("serve-handler");
const http = require("http");

(async () => {
	const server = http.createServer((request, response) =>
		// You pass two more arguments for config and middleware
		// More details here: https://github.com/vercel/serve-handler#options
		handler(request, response, { public: "out" })
	);

	server.listen(3000, () => {
		console.log("Running at http://localhost:3000");
	});
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

	await page.pdf({ path: "out/cv.pdf", format: "a4", scale: 0.8 });
	await browser.close();
	await server.close();
})();
