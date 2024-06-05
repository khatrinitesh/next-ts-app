"use client";
import React, { ReactNode,useEffect, useState } from "react";
// import './style.css';
import Link from "next/link";
import Image from "next/image";
import Wallpaper from "../../../assets/img/wallpaper.jpg";


const Example:React.FC<> = ({}) => {

  return (
    <>
      <div className="relative p-6 w-80 h-80 bg-black rounded-lg border border-white/10 backdrop-blur-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-white">Frosted Glass Effect</h2>
      <p className="text-white mt-4">This is an example of a frosted glass effect using Tailwind CSS.</p>
    </div>
    </>
  );
};

export default Example;
