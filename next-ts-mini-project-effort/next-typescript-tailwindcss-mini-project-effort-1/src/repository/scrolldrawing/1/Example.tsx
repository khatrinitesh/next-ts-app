"use client";
// styling
import './custom.css';
// custom hooks - state management
import React, { useState, useEffect, useRef } from "react";
// library
import { DocumentIcon, HomeIcon, MenuIcon, UserIcon } from '@heroicons/react/outline'; // Heroicons for menu icon
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
    <ScrollDrawing/>
    </>
  )
};

export default Example;


const ScrollDrawing: React.FC<> = ({ }) => {
    const [isDrawing, setIsDrawing] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          // Logic to determine when to start drawing
          const scrollY = window.scrollY;
          if (scrollY > 200) {
            setIsDrawing(true);
          } else {
            setIsDrawing(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
      <>
       <div className="h-screen flex items-center justify-center">
      <svg
        className={`w-64 ${isDrawing ? 'draw' : ''}`}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="40" fill="transparent" stroke="black" strokeWidth="3" />
      </svg>
    </div>
      </>
    );
  };


