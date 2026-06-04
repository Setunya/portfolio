import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep navy primary
        navy: {
          50: "#f0f3f9",
          100: "#dbe2ef",
          200: "#b9c7df",
          300: "#8da3ca",
          400: "#5e79b0",
          500: "#3f5994",
          600: "#2f4475",
          700: "#26375f",
          800: "#1b2742",
          900: "#0f1729",
          950: "#080d18",
        },
        // Subtle purple accent
        accent: {
          50: "#f4f2ff",
          100: "#ece8ff",
          200: "#dbd4ff",
          300: "#c0b2ff",
          400: "#a085ff",
          500: "#8259f7",
          600: "#7038eb",
          700: "#5f28cf",
          800: "#4f23a8",
          900: "#421f87",
          950: "#28125c",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "pulse-soft": "pulse-soft 2.4s ease-in-out infinite",
      },
      backgroundImage: {
        "grid-light":
          "radial-gradient(circle at 1px 1px, rgba(15,23,41,0.06) 1px, transparent 0)",
        "grid-dark":
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};

export default config;
