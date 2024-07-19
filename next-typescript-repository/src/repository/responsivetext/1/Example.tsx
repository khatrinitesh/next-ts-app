"use client";
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
import { ResponsiveTextProps } from './interface';
// constants



const Example = () => {
   
  return (
    <>
    <ResponsiveTables text="hello world"/>
    </>
  )
};

export default Example;


const ResponsiveTables: React.FC<ResponsiveTextProps> = ({ text }) => {
    return (
      <>
       <div className="text-4xl md:text-2xl lg:text-3xl xl:text-4xl">
      {text}
    </div>
      </>
    );
  };


