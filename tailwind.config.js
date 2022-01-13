module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        hero: "url('/hero-image.png')",
      }),
      colors: {
        primary: {
          500: "#4D9CAA",
        },
        secondary: {
          500: "#8CC0CB",
        },
      },
    },
  },
  plugins: [],
};
