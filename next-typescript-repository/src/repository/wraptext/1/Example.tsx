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
    <WrapTextComp/>
    </>
  );
};

export default Example;

const WrapTextComp:React.FC = () => {
    return(
        <>
         <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Text Wrapping Example</h1>
      <div className="max-w-md bg-gray-200 p-4 rounded">
        <p className="text-sm text-gray-700 break-words">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi commodo, fermentum
          neque vel, commodo magna. Phasellus tincidunt leo id eros sodales, id ultricies felis
          volutpat. Sed lacinia, justo non dictum convallis, nisl est convallis eros, at pulvinar
          lectus risus quis libero.
        </p>
      </div>
    </div>
        </>
    )
}