"use client";
import React, { useRef, ReactNode, useEffect, useState } from "react";
// import './style.css';
import Link from "next/link";
import Image from "next/image";
import Wallpaper from "../../../assets/img/wallpaper.jpg";
import VideoScreen from "../../../assets/video/movie.mp4";
import axios from "axios";

const Example: React.FC<> = ({}) => {
  const handleHotspotClick = (area: string) => {
    // Handle click event for each hotspot area
    console.log(`Clicked hotspot area: ${area}`);
  };
  return (
    <>
      <div className="relative w-full">
        <Image
          src={Wallpaper}
          alt="Image with hotspots"
          className="w-full"
        />
        <button
          className="absolute top-1/4 left-1/4 bg-red-500 hover:bg-red-600 rounded-full w-8 h-8"
          style={{ top: "25%", left: "25%" }}
          onClick={() => handleHotspotClick("area1")}
        />
        <button
          className="absolute top-1/2 left-1/2 bg-blue-500 hover:bg-blue-600 rounded-full w-8 h-8"
          style={{ top: "50%", left: "50%" }}
          onClick={() => handleHotspotClick("area2")}
        />
        <button
          className="absolute top-3/4 left-3/4 bg-green-500 hover:bg-green-600 rounded-full w-8 h-8"
          style={{ top: "75%", left: "75%" }}
          onClick={() => handleHotspotClick("area3")}
        />
      </div>
    </>
  );
};

export default Example;
