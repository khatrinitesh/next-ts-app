"use client";
import React, { useRef, ReactNode, useEffect, useState } from "react";
// import './style.css';
import Link from "next/link";
import Image from "next/image";
import Wallpaper from "../../../assets/img/wallpaper.jpg";
import VideoScreen from "../../../assets/video/movie.mp4";
import axios from "axios";
import { FaSearch } from 'react-icons/fa'; // Import an icon from react-icons

interface ImageZoomProps {
    imageUrl: string;
    altText: string;
  }


const Example: React.FC<{imageUrl: string;overlayText:string}> = ({ imageUrl,altText  }) => {
    
  return (
    <>
      <div className="relative w-full h-auto overflow-hidden rounded-lg shadow-lg group">
      {/* Image */}
      <Image
        src={imageUrl}
        alt={altText}
        className="w-full h-auto transform transition-transform duration-300 ease-in-out group-hover:scale-110"
      />
    </div>
    </>
  );
};

export default Example;
