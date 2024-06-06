"use client";
import React, { useRef, ReactNode, useEffect, useState } from "react";
// import './style.css';
import Link from "next/link";
import Image from "next/image";
import Wallpaper from "../../../assets/img/wallpaper.jpg";
import VideoScreen from "../../../assets/video/movie.mp4";
import axios from "axios";

const Example: React.FC<{}> = ({}) => {
    
  
  return (
    <>
        <div className="relative h-64 bg-gray-200">
      {/* Container for floating elements */}
      <div className="absolute top-1/2 transform -translate-y-1/2">
        {/* Floating elements */}
        <div className="float-left w-1/3 h-auto p-4 bg-white border border-gray-300 rounded-lg mx-2">Float 1</div>
        <div className="float-left w-1/3 h-auto p-4 bg-white border border-gray-300 rounded-lg mx-2">Float 2</div>
        <div className="float-left w-1/3 h-auto p-4 bg-white border border-gray-300 rounded-lg mx-2">Float 3</div>
      </div>
    </div>
    </>
  );
};

export default Example;
