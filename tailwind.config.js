/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        barlow: ["Barlow", "sans-serif"],
        comic: ["Comic Neue", "sans-serif"],
        luckiest: ["Luckiest Guy", "sans-serif"],
      },
      colors: {
        primary: "#EB879C",
        secondary: "#DB3357",
        tertiary: "#191919",
        newDark: "#0d0d0d",
      },
    },
  },
  plugins: [],
};
