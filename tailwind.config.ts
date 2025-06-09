import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        1: "56px",
      },
      colors: {
        gray: "#7C7C7C",
        "dark-gray": "#4E4E4E",
        orange: "#FF9474",
        "Custom-gray": "#070707"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(#070707, #070707)",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        "Respxl": "26px",
        "2xl": "46px",
        "3xl": "67px",
      },
      boxShadow: {
        "custom-orange": "0 0 40px 0 rgba(255, 148, 116, 0.25)", // Ombre centrée avec couleur noire à 25% d'opacité
        "custom-white": "0 0 40px 0 rgba(255, 255, 255, 0.25)", // Ombre centrée avec couleur noire à 25% d'opacité
      },
    },
    fontFamily: {
      outfit: ["Outfit", "sans-serif"],
      ubuntu: ["Ubuntu", "sans-serif"],
    },
  },
  plugins: [],
};
export default config;
