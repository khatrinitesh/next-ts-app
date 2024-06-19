"use client";
// custom hooks state management
import React, { useState, useEffect } from "react";
// next image
import Image from "next/image";
// image and video
import Wallpaper from "../../../assets/img/wallpaper.jpg";

const Example = () => {
  return (
    <>
      <PortraitImageEffect imageUrl={Wallpaper} altText="Wallpaper"/>
    </>
  );
};

export default Example;

interface PortraitImageEffectProps{
    imageUrl:string;
    altText:string;
}

const PortraitImageEffect:React.FC<PortraitImageEffectProps> = ({imageUrl,altText}) => {
    return(
        <>
         <div className="relative w-48 h-72 overflow-hidden rounded-lg shadow-md">
      <Image
        src={imageUrl}
        alt={altText}
        className="object-cover w-full h-full transition-transform duration-300 transform hover:scale-110"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-black bg-opacity-50 text-white text-center p-4 rounded-lg">
          <p className="font-bold text-lg">{altText}</p>
          <p className="text-sm">Click for more details</p>
        </div>
      </div>
    </div>
        </>
    )
}
