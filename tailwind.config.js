const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	purge: [
		"./components/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter var", ...defaultTheme.fontFamily.sans],
				serif: ["NewsreaderVariable", ...defaultTheme.fontFamily.serif],
				display: ["InterDisplay var"],
			},
			maxWidth: {
				"85ch": "85ch",
			},
		},
	},
	variants: {},
	plugins: [],
};
