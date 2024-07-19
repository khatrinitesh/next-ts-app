import { Montserrat, Poppins, Open_Sans } from "next/font/google";

// Declare the Montserrat font with specific weights
export const montserrat = Montserrat({ 
  subsets: ['latin'], 
  variable: "--font-montserrat" 
});

// Declare the Poppins font with specific weights
export const poppins = Poppins({ 
  subsets: ['latin'], 
  variable: "--font-poppins",
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] // Specify the weights you need
});
 
// Declare the Open Sans font with specific weights
export const opensans = Open_Sans({ 
  subsets: ['latin'], 
  variable: "--font-opensans",
  weight: [ '300', '400', '500', '600', '700', '800',] // Specify the weights you need
});
