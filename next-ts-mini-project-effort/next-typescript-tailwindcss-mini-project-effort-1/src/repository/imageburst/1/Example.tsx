"use client";
import React, { useRef, ReactNode, useEffect, useState } from "react";
// import './style.css';
import Link from "next/link";
import Image from "next/image";
import Wallpaper from "../../../assets/img/wallpaper.jpg";
import VideoScreen from "../../../assets/video/movie.mp4";
import axios from "axios";


const Example: React.FC<EmbedIframeProps> = ({ src }) => {
  return (
    <>
      <div className="relative">
      {/* Main Image */}
      <Image
        src={Wallpaper}
        alt="Main Image"
        className="w-full h-auto"
      />
      
      {/* Image Burst Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-20 h-20 bg-gray-200 rounded-full"></div>
          <div className="w-20 h-20 bg-gray-200 rounded-full"></div>
          <div className="w-20 h-20 bg-gray-200 rounded-full"></div>
          <div className="w-20 h-20 bg-gray-200 rounded-full"></div>
          <div className="w-20 h-20 bg-gray-200 rounded-full"></div>
          {/* Add more divs as needed */}
        </div>
      </div>
    </div>
    </>
  );
};

export default Example;
