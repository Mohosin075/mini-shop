import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#1E40AF",
          light: "#FFFFFF",
          lightGray: "#FAFAFA",
          dark: "#12141D",
          darkGray: "#B7B8BB",
          lightBlue: "#0EA5E9",
        },
      },
    },
  },
  plugins: [daisyui],
} satisfies Config;
