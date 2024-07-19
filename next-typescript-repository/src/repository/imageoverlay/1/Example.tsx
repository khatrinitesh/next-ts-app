"use client";
import React, { useRef, ReactNode, useEffect, useState } from "react";
// import './style.css';
import Link from "next/link";
import Image from "next/image";
import Wallpaper from "../../../assets/img/wallpaper.jpg";
import VideoScreen from "../../../assets/video/movie.mp4";
import axios from "axios";


const Example: React.FC<{imageUrl: string;overlayText:string}> = ({ imageUrl,overlayText  }) => {

    const [magnifierPosition, setMagnifierPosition] = useState({ x: 0, y: 0 });

    
  return (
    <>
       <div className="relative w-full h-auto">
      {/* Image */}
      <Image src={imageUrl} alt="Image" className="w-full h-auto rounded-lg shadow-lg" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
        <p className="text-white text-xl font-semibold">{overlayText}</p>
      </div>
    </div>
    </>
  );
};

export default Example;
