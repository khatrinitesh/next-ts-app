"use client";
import React, { useRef, ReactNode, useEffect, useState } from "react";
// import './style.css';
import Link from "next/link";
import Image from "next/image";
import Wallpaper from "../../../assets/img/wallpaper.jpg";
import VideoScreen from "../../../assets/video/movie.mp4";
import axios from "axios";


const Example: React.FC<{imageUrl: string[]}> = ({ imageUrl  }) => {

    const [magnifierPosition, setMagnifierPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
      const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
      const x = event.clientX - left;
      const y = event.clientY - top;
  
      setMagnifierPosition({
        x: (x / width) * 100,
        y: (y / height) * 100
      });
    };

  return (
    <>
      <div className="relative w-full h-auto">
      {/* Original image */}
      <Image
        src={imageUrl}
        alt="Image"
        className="w-full h-auto rounded-lg shadow-lg"
        onMouseMove={handleMouseMove}
      />

      {/* Magnifier glass */}
      <div
        className="absolute border border-gray-300 rounded-lg"
        style={{
          width: '100px',
          height: '100px',
          left: `calc(${magnifierPosition.x}% - 50px)`,
          top: `calc(${magnifierPosition.y}% - 50px)`,
          backgroundPosition: `-${magnifierPosition.x * 2}px -${magnifierPosition.y * 2}px`,
          backgroundSize: '400% 400%',
          cursor: 'none',
          pointerEvents: 'none',
          zIndex: 999
        }}
      ></div>
    </div>
    </>
  );
};

export default Example;
