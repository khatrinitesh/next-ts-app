"use client";
import React, { useRef, ReactNode, useEffect, useState } from "react";
// import './style.css';
import Link from "next/link";
import Image from "next/image";
import Wallpaper from "../../../assets/img/wallpaper.jpg";
import VideoScreen from "../../../assets/video/movie.mp4";
import axios from "axios";
import { FaSearch } from 'react-icons/fa'; // Import an icon from react-icons


const Example: React.FC<{imageUrl: string;overlayText:string}> = ({ imageUrl,overlayText  }) => {
    
  return (
    <>
       <div className="relative w-full h-auto group">
      {/* Image */}
      <Image src={imageUrl} alt="Image" className="w-full h-auto rounded-lg shadow-lg" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 ease-in-out flex items-center justify-center rounded-lg">
        <div className="flex flex-col items-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
          <FaSearch className="text-white text-3xl mb-2" /> {/* Icon */}
          <p className="text-white text-xl font-semibold">{overlayText}</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Example;
