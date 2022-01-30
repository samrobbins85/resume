const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        display: ["InterDisplay var"],
      },
      maxWidth: {
        "85ch": "85ch",
      },
      fontSize: {
        "12pt": "12pt",
      },
      screens: {
        sm: { min: "600px", max: "767px" },
        print: { raw: "print" },
      },
      colors: {
        teal: colors.teal,
        cyan: colors.cyan,
      },
    },
  },
  plugins: [],
};
