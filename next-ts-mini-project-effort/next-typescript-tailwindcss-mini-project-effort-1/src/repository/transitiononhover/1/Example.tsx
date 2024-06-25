"use client";
// custom hooks - state management
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";
// LIBRARY
import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";
// NEXT/IMAGE
import Image from "next/image";
// NEXT/LINK
import Link from "next/link";
// WALLPAPER
import Wallpaper from "../../../assets/img/wallpaper.jpg";
// // STYLINGCSS
import "./style.css";
// INTERFACE

// CONSTANTS

const Example = () => {
  return (
    <>
       <TransitionHover/>
    </>
  );
};

export default Example;


const TransitionHover: React.FC<> = () => {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
  return (
    <>
<div
            className={`box ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            Hover over me
        </div>
    </>
  );
};
