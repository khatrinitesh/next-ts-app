"use client";
import React, { useRef, ReactNode, useEffect, useState } from "react";
// import './style.css';
import Link from "next/link";
import Image from "next/image";
import Wallpaper from "../../../assets/img/wallpaper.jpg";
import VideoScreen from "../../../assets/video/movie.mp4";
import axios from "axios";

const Example: React.FC<{imageUrl: string; alt: string }> = ({imageUrl,alt}) => {
    
  
  return (
    <>
         <div className="flex items-center justify-center">
      <img src={imageUrl} alt={alt} className="max-w-full max-h-full" />
    </div>
    </>
  );
};

export default Example;
