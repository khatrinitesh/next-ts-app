"use client";
// custom hooks state management
import React, { useState, useEffect } from "react";
// next image
import Image from "next/image";
// image and video
import Wallpaper from "../../../assets/img/wallpaper.jpg";
import VideoMovie from "../../../assets/video/movie.mp4";

const Example = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
     <h1 className="text-3xl font-bold mb-4">Input Component Example</h1>
      <Input placeholder="Enter your text here" placeholderColor="red"/>
      </div>
    </>
  );
};

export default Example;

interface InputProps{
    placeholder:string;
    placeholderColor?:string // optional placeholder color
}

const Input:React.FC<InputProps> = ({placeholder,placeholderColor= 'blue'}) => {
    return(
        <>
        <input type="text" placeholder={placeholder} className={`border border-gray-300 p-2 rounded-md focus:outline-none placeholder-${placeholderColor}`} />
        </>
    )
}
