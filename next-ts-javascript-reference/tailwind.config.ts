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
        amber: {
          100: '#fef3c7',
          500: '#f59e0b',
        },
        emerald: {
          600: '#059669',
        },
      },
      backgroundImage: {
        "custom-graident1":'radial-gradient(circle at bottom left, var(--tw-gradient-stops))',
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))", 
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
