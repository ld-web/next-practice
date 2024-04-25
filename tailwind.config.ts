import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "selector",
  content: [
    "./src/*.tsx",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        success: {
          "0%": { transform: "scale(1)" },
          "10%": { transform: "scale(1.1)" },
          "20%": { transform: "scale(1.2)" },
          "30%": { transform: "scale(1.3)" },
          "40%": { transform: "scale(1.4)" },
          "50%": { transform: "scale(1.5)" },
          "60%": { transform: "scale(1.4)" },
          "70%": { transform: "scale(1.3)" },
          "80%": { transform: "scale(1.2)" },
          "90%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        "practice-success": "success 0.35s linear forwards",
      },
    },
  },
  plugins: [],
};
export default config;
