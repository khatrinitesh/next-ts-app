"use client";
// custom hooks - state management
import React, { useState, useEffect, useRef } from "react";
// library
// next image
import Image from "next/image";
import Link from "next/link";
// interface
import Wallpaper from "../../../assets/img/wallpaper.jpg";

// constants

const Example = () => {
  return (
    <>
    <ResponsiveImagesComponent src={Wallpaper} title="Iframe"/>
    </>
  );
};

export default Example;

interface IframeProps{
    src:string;
    alt:string;
    width:number;
    height:number;
}

const ResponsiveImagesComponent: React.FC<IframeProps> = ({src,alt,width,height}) => {


  return (
    <>
      
      <div className="relative w-full h-0" style={{ paddingTop: `${(height / width) * 100}%` }}>
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0 w-full h-full rounded-lg"
      />
    </div>
    </>
  )
};
