"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";



const Example:React.FC = () => {
  return (
    <>
    <Home/>
    </>
  );
};

export default Example;

interface LayoutProps{
    children:ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    );
  };

  const Footer: React.FC = () => {
    return (
      <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
        </div>
      </footer>
    );
  };

  const Home:React.FC = () => {
    return(
        <>
         <Layout>
         <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold">Welcome to My Website</h1>
        <p className="mt-4">This is a sample page with a fixed footer using Next.js, TypeScript, and TailwindCSS.</p>
      </div>
         </Layout>
        </>
    )
  }