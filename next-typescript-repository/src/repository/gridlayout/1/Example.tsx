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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        <div className="bg-blue-500 text-white p-4 rounded">Item 1</div>
        <div className="bg-green-500 text-white p-4 rounded">Item 2</div>
        <div className="bg-red-500 text-white p-4 rounded">Item 3</div>
        <div className="bg-yellow-500 text-white p-4 rounded">Item 4</div>
        <div className="bg-purple-500 text-white p-4 rounded">Item 5</div>
        <div className="bg-pink-500 text-white p-4 rounded">Item 6</div>
      </div>
    </>
  );
};

export default Example;
