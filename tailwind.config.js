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
      colors: {},
      backgroundColor: {},
    },
  },
  plugins: [],
};
