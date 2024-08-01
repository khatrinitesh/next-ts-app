import {  Mukta, Oswald as OswaldFont  } from "next/font/google";
import { Montserrat } from 'next/font/google';
import { Poppins } from 'next/font/google';

// Configure the Montserrat font
const mukta = Mukta({
    subsets: ["latin"], // Include Latin subset for characters
    display: "swap", // Swap the font display strategy
    variable: "--font-mukta", // Define a CSS variable for the font
    weight: ["200", "300", "400", "500", "600", "700","800"],
  });
// Configure the Montserrat font
const poppins = Poppins({
    subsets: ["latin"], // Include Latin subset for characters
    display: "swap", // Swap the font display strategy
    variable: "--font-poppins", // Define a CSS variable for the font
    weight: ["400", "500", "600", "700", "800", "900"],
  });
// Configure the Montserrat font
const montserrat = Montserrat({
  subsets: ["latin"], // Include Latin subset for characters
  display: "swap", // Swap the font display strategy
  variable: "--font-montserrat", // Define a CSS variable for the font
});
// Configure the Oswald font
const oswald = OswaldFont({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oswald", // Define a CSS variable for the Oswald font
});

export { montserrat, oswald,poppins,mukta };
