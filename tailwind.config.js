/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Josefin Sans", "sans-serif"],
        mcLaren: ["McLaren", "sans-serif"]
      },
      colors: {
        green: "#73F6BE",
        darkDark: "#2E3532",
        darkLight: "#525754",
        lightLight: "#E0E2DB",
        darkFooter: "#232826"
      },
    },
  },

  plugins: [],
};
