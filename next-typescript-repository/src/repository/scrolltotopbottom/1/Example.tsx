"use client";
// styling
// import './custom.css';
// custom hooks - state management
import React, { useState, useEffect, useRef } from "react";
// library
import { ArrowUpIcon, DocumentIcon, HomeIcon, MenuIcon, UserIcon } from '@heroicons/react/outline'; // Heroicons for menu icon
// next image / link
import Image from "next/image";
import Link from "next/link";
// images
import Wallpaper from "../../../assets/img/wallpaper.jpg";
// interface
// constants


const Example = () => {
    
  return (
    <>
    <ScrollToTop/>
    </>
  )
};

export default Example;

const ScrollToTop: React.FC = () => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
  
    return (
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 bg-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        <ArrowUpIcon className="h-5 w-5" aria-hidden="true" />
        <span className="sr-only">Scroll to top</span>
      </button>
    );
  };

