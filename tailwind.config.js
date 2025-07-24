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
        // Colores principales de tu proyecto
        primary: "#0891b2",        // cyan-600
        "primary-dark": "#0e7490",  // cyan-700
        "primary-light": "#67e8f9", // cyan-300
        secondary: "#2563eb",       // blue-600
        "secondary-dark": "#1d4ed8", // blue-700
        "secondary-light": "#93c5fd", // blue-300

        // Colores de fondo
        "bg-main": "#020617",       // slate-950
        "bg-section": "#164e63",    // cyan-900
        "bg-card": "#164e63",       // cyan-900
        "bg-card-hover": "#155e75", // cyan-800

        // Colores de texto
        "text-main": "#ffffff",
        "text-accent": "#67e8f9",   // cyan-300
        "text-secondary": "#cffafe", // cyan-100
        "text-muted": "#a5f3fc",    // cyan-200

        // Colores de borde
        "border-main": "#0891b2",   // cyan-600
        "border-accent": "#22d3ee", // cyan-400

        // Colores existentes de tu proyecto
        green: "#73F6BE",
        darkDark: "#2E3532",
        darkLight: "#525754",
        lightLight: "#E0E2DB",
        darkFooter: "#232826",

        // Colores de shadcn/ui (mantener)
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },

        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },

  plugins: [require("tailwindcss-animated")],
};
