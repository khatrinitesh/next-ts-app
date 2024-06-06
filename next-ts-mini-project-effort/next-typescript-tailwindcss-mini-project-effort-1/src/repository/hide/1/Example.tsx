"use client";
import React, { useRef, ReactNode, useEffect, useState } from "react";
// import './style.css';
import Link from "next/link";
import Image from "next/image";
import Wallpaper from "../../../assets/img/wallpaper.jpg";
import VideoScreen from "../../../assets/video/movie.mp4";
import axios from "axios";



const Example: React.FC<> = ({}) => {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };
  return (
    <>
    <div className="p-4">
      <button
        onClick={toggleVisibility}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        {isVisible ? 'Hide' : 'Show'} Section
      </button>
      {isVisible && (
        <div className="mt-4 p-4 bg-gray-100 rounded shadow-md">
          <h2 className="text-xl font-bold mb-2">Hidden Section</h2>
          <p>This section is now visible. Click the button to hide it again.</p>
        </div>
      )}
    </div>
    </>
  );
};

export default Example;
