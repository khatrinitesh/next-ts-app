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
      <div className="flex overflow-x-auto block space-x-4 p-4 bg-gray-200">
        <a
          href="#"
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg"
        >
          Menu Item 1
        </a>
        <a
          href="#"
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg"
        >
          Menu Item 2
        </a>
        <a
          href="#"
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg"
        >
          Menu Item 3
        </a>
        <a
          href="#"
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg"
        >
          Menu Item 4
        </a>
        <a
          href="#"
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg"
        >
          Menu Item 5
        </a>
        <a
          href="#"
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg"
        >
          Menu Item 6
        </a>
        <a
          href="#"
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg"
        >
          Menu Item 7
        </a>
        <a
          href="#"
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg"
        >
          Menu Item 8
        </a>
        <a
          href="#"
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg"
        >
          Menu Item 9
        </a>
        <a
          href="#"
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg"
        >
          Menu Item 10
        </a>
        <a
          href="#"
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg"
        >
          Menu Item 8
        </a>
        <a
          href="#"
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg"
        >
          Menu Item 9
        </a>
        <a
          href="#"
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg"
        >
          Menu Item 10
        </a>
        <a
          href="#"
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg"
        >
          Menu Item 8
        </a>
        <a
          href="#"
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg"
        >
          Menu Item 9
        </a>
        <a
          href="#"
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg"
        >
          Menu Item 10
        </a>
      </div>
    </>
  );
};

export default Example;
