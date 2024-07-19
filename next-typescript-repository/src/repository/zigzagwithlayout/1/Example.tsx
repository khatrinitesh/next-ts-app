"use client";
// custom hooks - state management
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";
// LIBRARY
import ReactPlayer from 'react-player';
// NEXT/IMAGE
import Image from "next/image";
// NEXT/LINK
import Link from "next/link";
// WALLPAPER
import Wallpaper from "../../../assets/img/wallpaper.jpg";
// // STYLINGCSS
// import "./style.css";
// INTERFACE

// CONSTANTS

const Example = () => {
    const items = [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
        'Item 5',
        'Item 6',
        'Item 7',
        'Item 8',
    ]
      
  return (
    <>
    <ZigZagLayout items={items}/>
    </>
  );
};

export default Example;

interface ZigzagLayoutProps {
    items: string[];
  }

const ZigZagLayout:React.FC<ZigzagLayoutProps> = ({items}) => {
    return(
        <>
        <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Zigzag Layout Example</h1>
      <div className="flex flex-wrap justify-between">
        {items.map((item, index) => (
          <div
            key={index}
            className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 ${index % 2 === 0 ? 'order-2' : 'order-1'}`}
          >
            <div className="bg-gray-200 p-4 rounded">
              <p className="text-lg font-semibold">{item}</p>
              <p className="text-sm text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra
                consectetur finibus.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
        </>
    )
}