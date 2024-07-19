"use client";
import React, { useEffect, useState } from "react";
import Link from 'next/link';

const Example: React.FC<> = ({}) => {
  
  return (
    <>
     <Home/>
    </>
  );
};

export default Example;

const Navbar = () => {
    return (
      <nav className="bg-blue-600 p-4">
        <ul className="flex justify-around">
          <li>
            <Link href="/" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="text-white hover:text-gray-300">
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white hover:text-gray-300">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    );
  };

  const Home = () => {
    return (
      <div>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to My Website</h1>
            <p className="text-lg text-gray-700">This is a simple example website using Next.js and Tailwind CSS.</p>
          </div>
        </main>
      </div>
    );
  };
