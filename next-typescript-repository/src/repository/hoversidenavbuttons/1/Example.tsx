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
      <div className="flex flex-col h-full bg-gray-800 text-white py-4">
      <button className="hover:bg-gray-700 hover:text-gray-200 px-4 py-2 rounded-md mb-2">Dashboard</button>
      <div className="group">
        <button className="hover:bg-gray-700 hover:text-gray-200 px-4 py-2 rounded-md mb-2 flex items-center justify-between">
          <span>Reports</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform transition-transform duration-300 group-hover:rotate-180" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a.75.75 0 0 1 .75.75v9.5a.75.75 0 0 1-1.23.587L6.47 10.22a1.5 1.5 0 0 1-.176-1.885l1.06-1.765A.75.75 0 0 1 7.75 6.5H3.75a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 .673.418l1.06 1.765a1.5 1.5 0 0 1-.176 1.885l-3.004 3.005a.75.75 0 0 1-1.058-1.058l3.004-3.005a.5.5 0 0 0-.058-.628l-1.06-1.764a2.25 2.25 0 0 1 .265-2.828l3.003-3.005A2.25 2.25 0 0 1 10 3z"/>
          </svg>
        </button>
        <div className="hidden group-hover:flex flex-col ml-4">
          <button className="hover:bg-gray-700 hover:text-gray-200 px-4 py-2 rounded-md mb-2">Monthly</button>
          <button className="hover:bg-gray-700 hover:text-gray-200 px-4 py-2 rounded-md mb-2">Yearly</button>
          <button className="hover:bg-gray-700 hover:text-gray-200 px-4 py-2 rounded-md mb-2">Quarterly</button>
        </div>
      </div>
      <button className="hover:bg-gray-700 hover:text-gray-200 px-4 py-2 rounded-md mb-2">Settings</button>
    </div>
    </>
  );
};

export default Example;
