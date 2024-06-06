"use client";
import React, { useRef, ReactNode, useEffect, useState } from "react";
// import './style.css';
import Link from "next/link";
import Image from "next/image";
import Wallpaper from "../../../assets/img/wallpaper.jpg";
import VideoScreen from "../../../assets/video/movie.mp4";
import axios from "axios";

const Example: React.FC<{tabs: string[]; contents: JSX.Element[]}> = ({tabs, contents}) => {
    const [activeTab, setActiveTab] = useState(0);    
  
  return (
    <>
     <div className="flex">
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={`px-4 py-2 cursor-pointer ${activeTab === index ? 'bg-gray-200' : ''}`}
          onMouseEnter={() => setActiveTab(index)}
        >
          {tab}
        </div>
      ))}
      <div className="ml-4">{contents[activeTab]}</div>
    </div>
    </>
  );
};

export default Example;
