"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";



const Example:React.FC = () => {
  return (
    <>
     <header className="fixed top-0 left-0 w-full bg-gray-800 text-white py-4 shadow-lg z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">MyWebsite</div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/"  className="hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about"  className="hover:text-gray-400">
                About
              </Link>
            </li>
            <li>
              <Link href="/services"  className="hover:text-gray-400">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact"  className="hover:text-gray-400">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    </>
  );
};

export default Example;
