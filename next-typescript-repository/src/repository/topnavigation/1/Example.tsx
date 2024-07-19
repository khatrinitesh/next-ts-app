"use client";
// custom hooks - state management
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";
// LIBRARY
import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";
// NEXT/IMAGE
import Image from "next/image";
// NEXT/LINK
import Link from "next/link";
// WALLPAPER
import Wallpaper from "../../../assets/img/wallpaper.jpg";
// // STYLINGCSS
// import "./style.css";
// INTERFACE

// CONSTANTS

const Example = () => {
  return (
    <>
       <TopNavComponent/>
    </>
  );
};

export default Example;

interface TopNav {
  text: string; // Text content of the tooltip
  position?: "top" | "right" | "bottom" | "left"; // Optional: Position of the tooltip
}

const TopNavComponent: React.FC<> = () => {
  return (
    <>
      <nav className="bg-gray-800 p-4">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div className="flex-shrink-0">
                        <a href="/" className="text-white text-2xl font-bold">
                            Your Logo
                        </a>
                    </div>
                    <div className="hidden md:block">
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Home
                            </a>
                            <a
                                href="#"
                                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                About
                            </a>
                            <a
                                href="#"
                                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Services
                            </a>
                            <a
                                href="#"
                                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                    <div className="md:hidden">
                        {/* Mobile menu button */}
                        <button
                            type="button"
                            className="block text-gray-300 hover:text-white focus:text-white focus:outline-none"
                            aria-controls="mobile-menu"
                        >
                            <svg
                                className="h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    </>
  );
};
