"use client";
import React, { useRef, ReactNode, useEffect, useState } from "react";
// import './style.css';
import Link from "next/link";
import Image from "next/image";
import Wallpaper from "../../../assets/img/wallpaper.jpg";
import VideoScreen from "../../../assets/video/movie.mp4";
import axios from "axios";
import { FaSearch } from 'react-icons/fa'; // Import an icon from react-icons


const Example: React.FC<{imageUrl: string;overlayText:string}> = ({ imageUrl,altText  }) => {

    const [inputValue, setInputValue] = useState<string>('');

    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      // Handle form submission logic here
      console.log(inputValue);
    };
    
  return (
    <>
       <form onSubmit={handleSubmit} className="flex items-center space-x-4">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter your text"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
      >
        Submit
      </button>
    </form>
    </>
  );
};

export default Example;
