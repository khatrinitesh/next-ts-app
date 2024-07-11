import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "poppins":'poppinsmedium'
      },
      colors:{
        "primarycolor":"#f27a8a",
        "secondarycolor":"#ea546c",
        "tertiarycolor":"#961b3c",
        "mainbodycolor":"#f7d794"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize:{
        "fs16":"16px", 
        "fs32":"32px" // <- Don't forget the comma here
      }
    },
  },
  plugins: [],
};
export default config;
