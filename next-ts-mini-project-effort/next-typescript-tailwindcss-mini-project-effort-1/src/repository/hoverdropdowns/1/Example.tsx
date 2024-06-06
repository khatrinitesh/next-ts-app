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
       <nav className="flex space-x-4">
        <ul className="relative">
            <li className="relative group">
                subitem
                <ul className="group-hover:block hidden absolute bg-gray-800 rounded-lg shadow-lg">
                    <li className="block px-4 py-2 text-white hover:bg-gray-700">list item</li>
                    <li className="block px-4 py-2 text-white hover:bg-gray-700">list item</li>
                    <li className="block px-4 py-2 text-white hover:bg-gray-700">list item</li>
                    <li className="block px-4 py-2 text-white hover:bg-gray-700">list item</li>
                </ul>
            </li>
        </ul>

      <div className="relative group">
        <button className="text-black px-4 py-2 rounded-lg  focus:outline-none focus:bg-gray-700">Menu 1</button>
        <div className="absolute hidden group-hover:block mt-2 bg-gray-800 rounded-lg shadow-lg">
          <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Option 1</a>
          <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Option 2</a>
          <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Option 3</a>
        </div>
      </div>
      <div className="relative group">
        <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 focus:outline-none focus:bg-gray-700">Menu 2</button>
        <div className="absolute hidden group-hover:block mt-2 bg-gray-800 rounded-lg shadow-lg">
          <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Option A</a>
          <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Option B</a>
          <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Option C</a>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Example;
