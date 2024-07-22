import type { Metadata } from "next";


import '../styles/globals.css';
import Footer from "./components/footer";

import { montserrat } from '@/FontFace';

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.variable}>
        {children}
        <Footer/>
      </body>
    </html>
  );
}