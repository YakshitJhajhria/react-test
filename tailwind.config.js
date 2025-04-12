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
      },
      backgroundColor: {
        primary:
          "linear-gradient(90deg, #B21F3F 0%, #DB3357 50%, #B21F3F 100%);",
      },
    },
  },
  plugins: [],
};
