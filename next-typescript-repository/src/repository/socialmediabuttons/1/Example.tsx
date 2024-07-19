"use client";
// CUSTOM HOOKS
import { useState, useEffect } from "react";
// NEXT/IMAGE
import Image from "next/image";
// LIBRARY
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactPlayer from "react-player";
import { Link as ScrollLink } from "react-scroll";
// STYLING
// import "./style.css";

// WALLPAPER
import Wallpaper1 from "../../../assets/img/wallpaper.jpg";
import Wallpaper2 from "../../../assets/img/wallpaper2.jpg";
import Wallpaper3 from "../../../assets/img/wallpaper3.jpg";
import Wallpaper4 from "../../../assets/img/wallpaper4.jpg";
// AUDIO
import Audio1 from "../../../assets/audio/SoundHelix-Song-1.mp3";
import Audio2 from "../../../assets/audio/SoundHelix-Song-2.mp3";
import Audio3 from "../../../assets/audio/SoundHelix-Song-3.mp3";

// INTERFACE

const Example: React.FC = () => {
    
    

   
  return (
    <>
      <FacebookButton/>
      <TwitterButton/>
    </>
  );
};

export default Example;



const FacebookButton: React.FC = () => {
    return (
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg inline-flex items-center justify-center space-x-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 20V10h4v10l5-7-5-7v6H5v4h5"
          />
        </svg>
        <span>Facebook</span>
      </a>
    );
  };

  const TwitterButton: React.FC = () => {
    return (
      <a
        href="https://twitter.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-400 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg inline-flex items-center justify-center space-x-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M22.46 2.52c-.84.37-1.74.62-2.68.73.96-.58 1.7-1.5 2.05-2.6-.9.53-1.9.92-2.96 1.13-.85-.9-2.06-1.46-3.4-1.46-2.57 0-4.66 2.1-4.66 4.66 0 .37.04.73.13 1.08-3.87-.2-7.3-2.05-9.6-4.86-.4.7-.63 1.52-.63 2.4 0 1.62.82 3.05 2.06 3.88-.76 0-1.47-.22-2.1-.55v.06c0 2.26 1.6 4.14 3.72 4.57-.4.1-.84.15-1.28.15-.3 0-.6-.03-.9-.08.6 1.9 2.3 3.3 4.3 3.35-1.57 1.25-3.55 1.98-5.7 1.98-.37 0-.74-.02-1.1-.07 2.03 1.3 4.45 2.05 7.05 2.05 8.45 0 13.07-7 13.07-13.07 0-.2 0-.4-.02-.6.9-.66 1.68-1.48 2.3-2.42z"
          />
        </svg>
        <span>Twitter</span>
      </a>
    );
  };
  