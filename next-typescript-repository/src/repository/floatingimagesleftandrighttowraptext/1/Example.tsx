"use client";
import React, { ReactNode,useEffect, useState } from "react";
import './style.css';
import Link from "next/link";
import Image from "next/image";


interface FloatingImageProps {
    src: string;
    alt: string;
    float: 'left' | 'right';
  }


const Example:React.FC<FloatingImageProps> = ({src,alt,float}) => {
  return (
    <>
    <Image 
      src={src} 
      alt={alt} 
      className={`w-48 h-auto mb-4 ${float === 'left' ? 'float-left mr-4' : 'float-right ml-4'}`} 
    />
    </>
  );
};

export default Example;
