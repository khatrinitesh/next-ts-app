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
        <input
      type="number" style={{ appearance: 'textfield' }}
      className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      onKeyDown={(e) => e.preventDefault()} // Prevent arrow key scrolling
    />
    </>
  );
};

export default Example;
