"use client";
import React, { ReactNode,useEffect, useState } from "react";
// import './style.css';
import Link from "next/link";
import Image from "next/image";
import Wallpaper from "../../../assets/img/wallpaper.jpg";


const Example:React.FC<> = ({}) => {

  return (
    <>
    <div className="relative min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Wallpaper.src})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl mb-4">Full Page Background Image</h1>
          <p className="text-xl">This is some centered content on top of a full-page background image.</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Example;
