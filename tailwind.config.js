/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./*.html", "./dist/js/*.js", "./dist/js/component/*.js"],
  theme: {
    container: {
      center: true,
      padding: "24px",
    },
    extend: {
      fontFamily: {
        "clash-display": ["ClashDisplay-Variable", "sans-serif", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        oren: "#EF4823",
        hijau: "#2A9D8F",
        "hitam-100": "#1C1C1C",
        "hitam-80": "#282828",
        "hitam-50": "#A8A6A6",
        "hitam-30": "#DCDCDC",
        putih: "#F5F3EF",
      },
      screens: {
        "2xl": "1320px",
      },
      keyframes: {
        "infinite-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "infinite-spin": "infinite-spin 30s linear infinite",
      },
    },
  },
  plugins: [],
};
