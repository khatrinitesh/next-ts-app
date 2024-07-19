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
import { RoundedImageProps } from "./interface";
// constants


const Example = () => {
    const handleClick = () => {
        alert('Button clicked!');
      }
   
  return (
    <>
    <RoundImgs alt="Click Me" src={Wallpaper}/>
    </>
  )
};

export default Example;


const RoundImgs: React.FC<RoundedImageProps> = ({src,alt  }) => {
    return (
      <>
      <Image
      src={src}
      alt={alt}
      className="rounded-full h-32 w-32 object-cover object-center"
    />
      </>
    );
  };


