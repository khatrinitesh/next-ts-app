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
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/outline";
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
       <div className="flex items-center justify-center h-screen">
      <div className="w-1/2 h-full flex justify-around items-center">
        <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
          {/* Content on the left */}
        </div>
        <VerticalLine />
        <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
          {/* Content on the right */}
        </div>
      </div>
    </div>
    </>
  );
};

export default Example;

const VerticalLine: React.FC = () => {
    return (
      <div className="border-l border-gray-300 h-full"></div>
    );
  };