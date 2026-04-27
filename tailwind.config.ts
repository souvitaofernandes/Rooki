import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#0D0F12",
          surface: "#141628",
          surface2: "#191A3A",
          text: "#FFFFFF",
          muted: "#C9CDD6",
          soft: "#8F96A3",
          accent: "#A8FF3E",
          aqua: "#34E6B0",
          cyan: "#35CFFF",
          purple: "#7467FF",
          // legacy aliases kept for compatibility
          snow: "#0D0F12",
          linen: "#141628",
          olive: "#FFFFFF",
          grey: "#8F96A3",
          lime: "#A8FF3E",
        },
      },
      fontFamily: {
        sans: ['"DM Sans"', "system-ui", "-apple-system", "sans-serif"],
        heading: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #A8FF3E 0%, #34E6B0 35%, #35CFFF 68%, #7467FF 100%)",
        "brand-gradient-soft": "linear-gradient(135deg, #34E6B0 0%, #35CFFF 50%, #7467FF 100%)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      boxShadow: {
        glow: "0 0 80px -20px rgba(168, 255, 62, 0.25)",
        "glow-aqua": "0 0 60px -20px rgba(52, 230, 176, 0.2)",
        "glow-purple": "0 0 60px -20px rgba(116, 103, 255, 0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
