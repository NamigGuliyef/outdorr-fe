import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
const { fontFamily } = require("tailwindcss/defaultTheme");

export default {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "992px",
      xl: "1320px",
    },
    container: {
      center: true,
      screens: {
        lg: "992px",
        xl: "1320px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        lightgray: "#F5F5F5",
        secondarygray: "#F0F2F3",
        darkgray: "#333333",
        blackgray: "#111111",
        secondaryblack: "#171719",
        mainblack: "#070707",
        lightblue: "#11A3FF",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        section: "60px",
        "2.5xl": "25px",
      },
      fontSize: {
        "3.2xl": "32px",
        "7.2xl": "72px",
      },
      margin: {
        "60px": "60px",
        "80px": "80px",
      },
      padding: {
        "60px": "60px",
        "80px": "80px",
      },
      gap: {
        "80px": "80px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        sf: ["var(--font-sf)", ...fontFamily.sans],
        helvetica: ["var(--font-helvetica)", ...fontFamily.sans],
      },
      backgroundImage: {
        hero: "url('/images/main-page/herobg.jpg')",
      },
    },
  },
  plugins: [nextui(), require("tailwindcss-animate")],
} satisfies Config;
