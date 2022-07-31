/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Prata", "sans-serif;"],
        secondary: ["DM Sans", "sans-serif;"],
      },
      colors: {
        primary: "#222120",
        secondary: "#F8F3ED",
        whiteLight: "#FAF5EF",
        whiteBase: "#fff",
        whiteMedium: "#F8F3ED",
      },
    },
  },
  plugins: [],
};
