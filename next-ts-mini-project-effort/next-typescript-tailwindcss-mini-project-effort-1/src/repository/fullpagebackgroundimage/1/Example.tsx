"use client";
import React, { ReactNode,useEffect, useState } from "react";
// import './style.css';
import Link from "next/link";
import Image from "next/image";
import Wallpaper from "../../../assets/img/wallpaper.jpg";


const Example:React.FC<> = ({}) => {

  return (
    <>
    <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Wallpaper.src})` }}>
      <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-50">
        <h1 className="text-white text-4xl">Full Page Background Image</h1>
      </div>
    </div>
    </>
  );
};

export default Example;
