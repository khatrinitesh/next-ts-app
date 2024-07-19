"use client";
import React, { useRef, ReactNode, useEffect, useState } from "react";
// import './style.css';
import Link from "next/link";
import Image from "next/image";
import Wallpaper from "../../../assets/img/wallpaper.jpg";
import VideoScreen from "../../../assets/video/movie.mp4";
import axios from "axios";
import { FaSearch } from 'react-icons/fa'; // Import an icon from react-icons

interface ImageTextBlockProps {
    imageUrl: string;
    title: string;
    description: string;
  }


const Example: React.FC<{imageUrl: string;overlayText:string}> = ({ imageUrl,title,description  }) => {
    
  return (
    <>
       <div className="relative w-full h-auto overflow-hidden rounded-lg shadow-lg group">
      {/* Image */}
      <Image src={imageUrl} alt={title} className="w-full h-auto object-cover" />

      {/* Text Block */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out p-4">
        <h3 className="text-white text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-white text-base">{description}</p>
      </div>
    </div>
    </>
  );
};

export default Example;
