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
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-10px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(10px)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        fadeOut: 'fadeOut 1s ease-in-out',
        marquee: 'marquee 15s linear infinite',
        shake: 'shake 0.8s cubic-bezier(.36,.07,.19,.97) infinite', // Combine shake animation here
        spin: 'spin 1s linear infinite',
        bounce: 'bounce 1s infinite',
      },
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
