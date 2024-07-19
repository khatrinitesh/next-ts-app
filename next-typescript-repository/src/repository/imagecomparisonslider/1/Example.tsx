"use client";
import React, { useRef, ReactNode, useEffect, useState } from "react";
// import './style.css';
import Link from "next/link";
import Image from "next/image";
import Wallpaper from "../../../assets/img/wallpaper.jpg";
import VideoScreen from "../../../assets/video/movie.mp4";
import axios from "axios";


const Example: React.FC<{beforeImageUrl: string; afterImageUrl: string}> = ({ beforeImageUrl, afterImageUrl  }) => {

    const [sliderPosition, setSliderPosition] = useState<number>(50);

    const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSliderPosition(parseInt(event.target.value));
    };
  return (
    <>
     <div className="relative">
      {/* Before Image */}
      <img src={Wallpaper} alt="Before" className="w-full h-auto" />

      {/* After Image */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <img src={Wallpaper} alt="After" className="w-full h-auto" style={{ objectPosition: `-${sliderPosition}% 0` }} />
      </div>

      {/* Slider */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={handleSliderChange}
        className="absolute z-10 bottom-0 left-0 w-full h-8 bg-gray-200 appearance-none cursor-pointer"
      />
    </div>
    </>
  );
};

export default Example;
