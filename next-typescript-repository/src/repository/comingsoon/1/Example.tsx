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
import ReactPlayer from 'react-player';
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
    <ComingSoonComponent />
    </>
  );
};

export default Example;


const ComingSoonComponent:React.FC<> = ({}) => {
    return(
        <>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-lg text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">Coming Soon</h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          We are working hard to bring you an amazing new website.
        </p>
        <div className="flex justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 p-2 rounded-l focus:outline-none"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 focus:outline-none">
            Notify Me
          </button>
        </div>
      </div>
    </div>
        </>
    )
}