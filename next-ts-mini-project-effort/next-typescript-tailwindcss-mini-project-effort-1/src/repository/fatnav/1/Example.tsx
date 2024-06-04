"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Example: React.FC<> = ({}) => {

    const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <>
       <button
        onClick={toggleNav}
        className="fixed top-4 right-4 p-2 bg-blue-500 text-white rounded-lg z-50"
      >
        {isOpen ? 'Close' : 'Open'} Menu
      </button>
      <div
        className={`fixed inset-0 bg-black bg-opacity-75 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <nav className="flex flex-col items-center justify-center min-h-screen space-y-8">
          <a href="#" className="text-white text-3xl">
            Home
          </a>
          <a href="#" className="text-white text-3xl">
            About
          </a>
          <a href="#" className="text-white text-3xl">
            Services
          </a>
          <a href="#" className="text-white text-3xl">
            Contact
          </a>
        </nav>
      </div>
    </>
  );
};

export default Example;
