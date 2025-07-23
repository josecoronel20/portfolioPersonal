/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Quicksand", "sans-serif"],
        mcLaren: ["McLaren", "sans-serif"],
      },
      colors: {
        bg: {
          main: "var(--color-bg-main)",
          section: "var(--color-bg-section)",
          card: "var(--color-bg-card)",
          "card-hover": "var(--color-bg-card-hover)",
        },
        text: {
          main: "var(--color-text-main)",
          accent: "var(--color-text-accent)",
          secondary: "var(--color-text-secondary)",
          muted: "var(--color-text-muted)",
        },
        border: {
          main: "var(--color-border-main)",
          accent: "var(--color-border-accent)",
        },
        cyan: {
          50: "var(--color-cyan-50)",
          100: "var(--color-cyan-100)",
          200: "var(--color-cyan-200)",
          300: "var(--color-cyan-300)",
          400: "var(--color-cyan-400)",
          500: "var(--color-cyan-500)",
          600: "var(--color-cyan-600)",
          700: "var(--color-cyan-700)",
          800: "var(--color-cyan-800)",
          900: "var(--color-cyan-900)",
        },
        blue: {
          50: "var(--color-blue-50)",
          100: "var(--color-blue-100)",
          200: "var(--color-blue-200)",
          300: "var(--color-blue-300)",
          400: "var(--color-blue-400)",
          500: "var(--color-blue-500)",
          600: "var(--color-blue-600)",
          700: "var(--color-blue-700)",
          800: "var(--color-blue-800)",
          900: "var(--color-blue-900)",
        },
        slate: {
          950: "var(--color-slate-950)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },

  plugins: [require("tailwindcss-animate")],
};
