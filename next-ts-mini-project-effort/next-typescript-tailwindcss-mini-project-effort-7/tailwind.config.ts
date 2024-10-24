import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // all folder structure everything is possible 
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}", // only pages folder
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // only components folder
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // only app inside such files
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily:{
        poppiunsmedium:['poppinsmedium']
      }
    },
  },
  plugins: [],
};
export default config;
