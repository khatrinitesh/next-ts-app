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
import { motion } from 'framer-motion';
// NEXT/IMAGE
import Image from "next/image";
// NEXT/LINK
import Link from "next/link";
// WALLPAPER
import Wallpaper from "../../../assets/img/wallpaper.jpg";
// // STYLINGCSS
// import "./style.css";
// INTERFACE

// CONSTANTS

const Example = () => {
  return (
    <>
       <TransparentImage imageUrl={Wallpaper} text="Hover over me"/>
    </>
  );
};

export default Example;

interface TransparentImageTextProps {
    imageUrl: string;
}

const TransparentImage: React.FC<TransparentImageTextProps> = ({imageUrl,text}) => {
    
  return (
    <>
 <div className="relative">
            <Image src={imageUrl} alt="Transparent Image" className="w-full h-auto" />
            <motion.div
                className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-white text-3xl font-bold bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300"
            >
                {text}
            </motion.div>
        </div>
    </>
  );
};
