import { Montserrat,Playfair,Poppins  } from 'next/font/google';

// configure the montserrat font
export const montserrat = Montserrat({
    subsets: ['latin'], // Choose subsets according to your needs
    weights: [400, 700], // Ensure these weights are available for Montserrat
  });

  export const playfair = Playfair({
    subsets: ['latin'],
    weights: [400, 700], // Use available weights for Playfair
  });