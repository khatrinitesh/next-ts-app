"use client";
import React, { useRef, ReactNode, useEffect, useState } from "react";
// import './style.css';
import Link from "next/link";
import Image from "next/image";
import Wallpaper from "../../../assets/img/wallpaper.jpg";
import VideoScreen from "../../../assets/video/movie.mp4";
import axios from "axios";


const Example: React.FC<{images: string[]}> = ({ images  }) => {

  return (
    <>
     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {/* Map through the images array and render each image */}
      {images.map((imageUrl, index) => (
        <Image key={index} src={imageUrl} alt={`Image ${index}`} className="w-full h-auto rounded-lg shadow-lg" />
      ))}
    </div>
    </>
  );
};

export default Example;
