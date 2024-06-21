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
    </>
  )
};

export default Example;


const ScrollIndicator: React.FC<> = ({ }) => {

    const [scrollPercentage, setScrollPercentage] = useState<number>(0);

    useEffect(() => {
        const handleScroll = () => {
          const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const scrolled = window.scrollY;
          const percentage = (scrolled / scrollHeight) * 100;
          setScrollPercentage(percentage);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
   

    return (
      <>
        <div className="h-full bg-white" style={{ width: `${scrollPercentage}%` }}/>
      </>
    );
  };


