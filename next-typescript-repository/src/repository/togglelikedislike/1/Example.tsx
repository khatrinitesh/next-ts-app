"use client";
// custom hooks - state management
import React, {createContext, useContext, useState, useEffect, useRef } from "react";
// LIBRARY
import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";
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
     <ToggleLikeDislike/>
    </>
  );
}; 

export default Example;

const ToggleLikeDislike:React.FC = () => {
    const [thumb,setThumb] = useState(false);

    const handleToggle = () => {
        setThumb(!thumb)
    }
    return(
        <>
        <button onClick={handleToggle} className="">
            {thumb ? <FaRegThumbsUp className="text-[green]" /> : <FaRegThumbsDown className="text-[red]" />}
        </button>
        </>
    )
}