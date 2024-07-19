"use client";
import React, { ReactNode,useEffect, useState } from "react";
import Link from "next/link";
import './style.css';

interface FlipImageProps{
    frontImg:string;
    backImg:string;
    alt:string;
}


const Example:React.FC<FlipImageProps> = ({frontImg,backImg,alt}) => {
  return (
    <>
    <div className="flip-container w-64 h-64">
      <div className="flip-card w-full h-full relative">
        <div className="flip-card-front absolute w-full h-full">
          <img src={frontImg} alt={alt} className="w-full h-full object-cover" />
        </div>
        <div className="flip-card-back absolute w-full h-full">
          <img src={backImg} alt={alt} className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
    </>
  );
};

export default Example;
