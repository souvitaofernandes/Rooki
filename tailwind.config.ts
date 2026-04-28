import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#FFFFFF",
        ink: "#0A0E27",
        text: "#1A1D2E",
        muted: "#5A6178",
        primary: "#443CFF",
        cyan: "#04C5FF",
        success: "#00FC6E",
        border: "#E5E7EB",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tight2: "-0.02em",
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #443CFF 0%, #04C5FF 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
