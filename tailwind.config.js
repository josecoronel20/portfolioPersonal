/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
