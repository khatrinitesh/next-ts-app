"use client";
// custom hooks - state management
import React, { useState, useEffect, useRef } from "react";
// library
// next image
import Image from "next/image";
import Link from "next/link";
// interface
import Wallpaper from "../../../assets/img/wallpaper.jpg";

// constants

const Example = () => {
  return (
    <>
     <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Responsive Image Example</h1>
        <div className="mb-4">
          <ResponsiveImage
            src={Wallpaper} // Replace with your image URL
            alt="Example Image"
            className="rounded-lg"
          />
        </div>
        <p className="text-sm text-gray-600">
          Example of a responsive image using React, TypeScript, and Tailwind CSS.
        </p>
      </div>
    </div>
    </>
  );
};

export default Example;

interface ResponsiveImageProps {
    src: string;
    alt: string;
    className?: string;
  }

const ResponsiveImage:React.FC<ResponsiveImageProps> = ({src,alt,className}) => {
   
    return(
        <>
       <Image
      src={src}
      alt={alt}
      className={`w-full h-auto ${className}`} // Ensure the image fills its container and maintains aspect ratio
    />
        </>
    )
}
