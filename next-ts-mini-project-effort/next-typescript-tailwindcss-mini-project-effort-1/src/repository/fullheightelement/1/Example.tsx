"use client";
import React, { ReactNode,useEffect, useState } from "react";
// import './style.css';
import Link from "next/link";
import Image from "next/image";
import Wallpaper from "../../../assets/img/wallpaper.jpg";


const Example:React.FC<> = ({}) => {

  return (
    <>
     <div className="flex items-center justify-center min-h-screen bg-gray-800 text-white">
      <h1 className="text-3xl">Full Height Element</h1>
    </div>
    </>
  );
};

export default Example;
