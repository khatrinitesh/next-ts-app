import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/repository/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f3f4f6',
        clay: {
          DEFAULT: '#e0e0e0',
          light: '#ffffff',
          dark: '#b0b0b0',
        },
      },
      boxShadow: {
        'clay-light': '9px 9px 16px #b0b0b0, -9px -9px 16px #ffffff',
        'clay-dark': '9px 9px 16px #b0b0b0, -9px -9px 16px #ffffff',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        spin: 'spin 1s linear infinite',
        bounce: 'bounce 1s infinite',
      },
    },
  },
  plugins: [],
};
export default config;
