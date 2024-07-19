"use client";
import React, { useRef, ReactNode, useEffect, useState } from "react";
// import './style.css';
import Link from "next/link";
import Image from "next/image";
import Wallpaper from "../../../assets/img/wallpaper.jpg";
import VideoScreen from "../../../assets/video/movie.mp4";
import axios from "axios";


interface IconButtonProps {
    icon: React.ReactNode; // SVG icon component
    label: string; // Accessible label for the icon button
    onClick: () => void; // Click event handler
  }

const Example: React.FC<IconButtonProps> = ({icon,label,onClick}) => {
    
  
  return (
    <>
       <button
      className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:bg-gray-300"
      onClick={onClick}
      aria-label={label}
    >
      {icon}
    </button>
    </>
  );
};

export default Example;
