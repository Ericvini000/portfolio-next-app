import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        gray: {
          100: "#F8F9FA",
          200: "#E9ECEF",
          300: "#868E96",
          400: "#212529",
          500: "#0A0A0B",
        },
        primary: {
          100: "#623CEA",
          50: "#311E75",
        },
        secondary: {
          100: "#FF577F",
        },
        social: {
          face: "#3b5998",
          phone: "#4ACA94",
          insta: "#D62976",
          linkdn: "#0E76A8",
        },
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar")({ nocompatible: true }),
    require("tailwindcss-animate"),
  ],
};
export default config;
