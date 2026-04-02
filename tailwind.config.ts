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
          snow: "#FAFAF8",
          linen: "#DFDDD5",
          olive: "#000000",
          grey: "#8A8B88",
          lime: "#CDF43F",
        },
      },
      fontFamily: {
        sans: ['"Open Sans"', "system-ui", "-apple-system", "sans-serif"],
        heading: ['"League Spartan"', "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
