"use client";
import React, { useRef, ReactNode, useEffect, useState } from "react";
// import './style.css';
import Link from "next/link";
import Image from "next/image";
import Wallpaper from "../../../assets/img/wallpaper.jpg";
import VideoScreen from "../../../assets/video/movie.mp4";
import axios from "axios";



const Example: React.FC<> = ({}) => {
   
    
  return (
    <>
      <div className="relative w-full">
      <hr className="border-t border-gray-300 mb-4" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[red] px-4">
        <span className="text-gray-500 text-lg font-bold">WORDS OVERLAY</span>
      </div>
    </div>
    </>
  );
};

export default Example;
