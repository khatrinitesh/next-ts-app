"use client";
// custom hooks - state management
import React, { useState, useEffect, useRef } from "react";
// library
// next image
import Image from "next/image";
import Link from "next/link";
// interface

// constants

const Example = () => {
  return (
    <>
    <ResponsiveHeaderComponent/>
    </>
  );
};

export default Example;

const ResponsiveHeaderComponent: React.FC<> = ({}) => {


  return (
    <>
      
      <header className="bg-gray-900 text-white shadow-md">
      <div className="max-w-screen-lg mx-auto px-4 py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/logo.svg"  // Replace with your logo image path
            alt="Logo"
            className="h-10 mr-2"
          />
          <span className="text-xl font-bold">Your Logo</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <Link href="#" className="text-white hover:text-gray-300">Home</Link>
            </li>
            <li>
              <Link href="#" className="text-white hover:text-gray-300">About</Link>
            </li>
            <li>
              <Link href="#" className="text-white hover:text-gray-300">Services</Link>
            </li>
            <li>
              <Link href="#" className="text-white hover:text-gray-300">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation (Hamburger Menu) */}
        <div className="md:hidden">
          <button
            type="button"
            className="text-white hover:text-gray-300 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5h18a1 1 0 010 2H3a1 1 0 010-2zm0 6h18a1 1 0 010 2H3a1 1 0 010-2zm0 6h18a1 1 0 010 2H3a1 1 0 010-2z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
    </>
  )
};
