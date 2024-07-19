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
    <ZoomHoverComponent />
    </>
  );
};

export default Example;


const ZoomHoverComponent:React.FC<> = ({}) => {
    return(
        <>
        <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Zoom Hover Example</h1>
      <div className="grid grid-cols-3 gap-4">
        {[...Array(9)].map((_, index) => (
          <div
            key={index}
            className="relative overflow-hidden group rounded-lg hover:scale-105 transform transition-transform duration-300"
          >
            <img
              src={`https://picsum.photos/id/${index + 1}/300/300`}
              alt={`Image ${index + 1}`}
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-semibold">Image {index + 1}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
        </>
    )
}