"use client";
import React, { useRef, ReactNode, useEffect, useState } from "react";
// import './style.css';
import Link from "next/link";
import Image from "next/image";
import Wallpaper from "../../../assets/img/wallpaper.jpg";
import VideoScreen from "../../../assets/video/movie.mp4";
import axios from "axios";



const Example: React.FC<> = ({}) => {
  return (
    <>
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${Wallpaper})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-4">Welcome to Our Site</h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8">Discover amazing content and engage with our community.</p>
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded text-lg sm:text-xl lg:text-2xl">Get Started</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Example;
