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
import { RoundButtonProps } from "./interface";
// constants


const Example = () => {
    const handleClick = () => {
        alert('Button clicked!');
      }
   
  return (
    <>
    <RoundBtns label="Click Me" onClick={handleClick}/>
    </>
  )
};

export default Example;


const RoundBtns: React.FC<RoundButtonProps> = ({label,onClick  }) => {
    return (
      <>
      <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      onClick={onClick}
    >
      {label}
    </button>
      </>
    );
  };


