"use client";
import React, {useRef , ReactNode,useEffect, useState } from "react";
// import './style.css';
import Link from "next/link";
import Image from "next/image";
import Wallpaper from "../../../assets/img/wallpaper.jpg";
import VideoScreen from "../../../assets/video/movie.mp4";


const Example:React.FC<> = ({}) => {

    const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);

    const handleOpenFullscreen = () => {
      setIsFullscreenOpen(true);
    };
  
    const handleCloseFullscreen = () => {
      setIsFullscreenOpen(false);
    };
  return (
    <>
      <button onClick={handleOpenFullscreen} className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none">Open Fullscreen</button>
      {isFullscreenOpen && (
        <FullscreenWindow>
          <div className="text-white h-full w-full flex items-center justify-center flex-col">
            <h1 className="text-4xl mb-4">Fullscreen Window</h1>
            <button onClick={handleCloseFullscreen} className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 focus:outline-none">Close Fullscreen</button>
          </div>
        </FullscreenWindow>
      )}
    </>
  );
};

export default Example;

interface FullscreenWindowProps {
    children: React.ReactNode;
  }

  const FullscreenWindow: React.FC<FullscreenWindowProps> = ({ children }) => {
    return (
      <div className="fixed inset-0 z-50 flex justify-center  items-center bg-black bg-opacity-75">
        <div className="w-full h-full">{children}</div>
      </div>
    );
  };
