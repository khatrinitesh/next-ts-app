"use client";
import React, { useRef, ReactNode, useEffect, useState } from "react";
// import './style.css';
import Link from "next/link";
import Image from "next/image";
import Wallpaper from "../../../assets/img/wallpaper.jpg";
import VideoScreen from "../../../assets/video/movie.mp4";
import axios from "axios";


const Example: React.FC<{imageUrl: string}> = ({ imageUrl  }) => {

  return (
    <>
    <div className="relative">
      <Image src={imageUrl} alt="Image" className="w-full h-auto rounded-lg shadow-lg filter grayscale-50" />
      {/* Text overlay */}
      <div className="absolute inset-0 flex items-center justify-center text-white">
        <p className="text-xl font-semibold">Image Title</p>
      </div>
    </div>
    </>
  );
};

export default Example;
