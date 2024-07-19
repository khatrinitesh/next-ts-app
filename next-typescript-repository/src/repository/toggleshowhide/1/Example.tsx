"use client";
// custom hooks - state management
import React, { useState, useEffect, useRef } from "react";

// NEXT/IMAGE
import Image from "next/image";
// NEXT/LINK
import Link from "next/link";
// WALLPAPER
import Wallpaper from "../../../assets/img/wallpaper.jpg";
// STYLINGCSS
// import "./style.css";
// INTERFACE

// CONSTANTS

const Example = () => {
  return (
    <>
       <ToggleComponent/>
    </>
  );
};

export default Example;

const ToggleComponent:React.FC = () =>{
    const [textVisible,setTextVisible] = useState<boolean>(false);

    const handleMouseEnter = ()=> {
        setTextVisible(true)
    }
    const handleMouseLeave = ()=> {
        setTextVisible(false)
    }


    return(
        <>
        <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >Mouse </button>
       {textVisible&& (  
        <div className="mt-2 p-2 bg-gray-200 rounded shadow-md">
                    Hi, how are you?
                </div>
            )}
        </>
    )
}

