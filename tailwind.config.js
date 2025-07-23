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
          // Variantes con opacidad
          "900/10":
            "color-mix(in srgb, var(--color-cyan-900) 10%, transparent)",
          "900/20":
            "color-mix(in srgb, var(--color-cyan-900) 20%, transparent)",
          "900/30":
            "color-mix(in srgb, var(--color-cyan-900) 30%, transparent)",
          "900/40":
            "color-mix(in srgb, var(--color-cyan-900) 40%, transparent)",
          "900/50":
            "color-mix(in srgb, var(--color-cyan-900) 50%, transparent)",
          "900/60":
            "color-mix(in srgb, var(--color-cyan-900) 60%, transparent)",
          "900/70":
            "color-mix(in srgb, var(--color-cyan-900) 70%, transparent)",
          "900/80":
            "color-mix(in srgb, var(--color-cyan-900) 80%, transparent)",
          "900/90":
            "color-mix(in srgb, var(--color-cyan-900) 90%, transparent)",
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
          // Variantes con opacidad para blue también
          "900/10":
            "color-mix(in srgb, var(--color-blue-900) 10%, transparent)",
          "900/20":
            "color-mix(in srgb, var(--color-blue-900) 20%, transparent)",
          "900/30":
            "color-mix(in srgb, var(--color-blue-900) 30%, transparent)",
          "900/40":
            "color-mix(in srgb, var(--color-blue-900) 40%, transparent)",
          "900/50":
            "color-mix(in srgb, var(--color-blue-900) 50%, transparent)",
          "900/60":
            "color-mix(in srgb, var(--color-blue-900) 60%, transparent)",
          "900/70":
            "color-mix(in srgb, var(--color-blue-900) 70%, transparent)",
          "900/80":
            "color-mix(in srgb, var(--color-blue-900) 80%, transparent)",
          "900/90":
            "color-mix(in srgb, var(--color-blue-900) 90%, transparent)",
        },
        slate: {
          950: "var(--color-slate-950)",
        },
        // Mantener colores existentes
        green: "#73F6BE",
        darkDark: "#2E3532",
        darkLight: "#525754",
        lightLight: "#E0E2DB",
        darkFooter: "#232826",
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
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
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
        // border: "hsl(var(--border))",
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

  plugins: [require("tailwindcss-animate")],
};
