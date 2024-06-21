"use client";
// styling
// import './custom.css';
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
    <HorizontalScroll/>
    </>
  )
};

export default Example;


const HorizontalScroll: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
  
    const handleScroll = (event: React.WheelEvent<HTMLDivElement>) => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += event.deltaY;
      }
    };
  
    return (
      <div
        ref={scrollRef}
        className="flex space-x-4 p-5 w-full h-96 overflow-x-auto border border-gray-300"
        onWheel={handleScroll}
      >
        {/* Replace with your content */}
        <div className="flex-none w-1/3 h-80 bg-gray-200 rounded-md"></div>
        <div className="flex-none w-1/3 h-80 bg-gray-300 rounded-md"></div>
        <div className="flex-none w-1/3 h-80 bg-gray-400 rounded-md"></div>
        <div className="flex-none w-1/3 h-80 bg-gray-500 rounded-md"></div>
        <div className="flex-none w-1/3 h-80 bg-gray-600 rounded-md"></div>
      </div>
    );
  };