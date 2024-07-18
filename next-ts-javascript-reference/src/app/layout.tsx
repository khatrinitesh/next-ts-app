"use client"
import { usePathname } from "next/navigation";

// COMPONENTS
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import About from "./about/page";
import ServiceList from "./service/page";
import Contact from "./contact/page";
import Blog from "./blog/page";

// STYLING
import '../assets/css/globals.css';

export default function RootLayout({children,}: Readonly<{children: React.ReactNode}>) {

  const pathname = usePathname();
  const validRoutes = ["/","/about",'/service','/blog','/contact'];
  
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
        <link rel="icon" href="./favicon.ico" type="image/x-icon" />
      </head>
      <body>
        <div className="flex flex-col h-full w-full">
        {/* START HEADER */}
        {validRoutes.includes(pathname) && <Header/>}
        {/* END HEADER */}

        {/* START MAIN CONTENT */}
        <div className="mainContent grow flex flex-col pb-64">
          {children}
        </div>
        {/* END MAIN CONTENT */}

        {/* START FOOTER */}
        {validRoutes.includes(pathname) && <Footer/>}
        {/* END FOOTER */}
        </div>
        </body>
    </html>
  );
}
