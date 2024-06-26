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
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/outline";
// NEXT/IMAGE
import Image from "next/image";
// NEXT/LINK
import Link from "next/link";
// WALLPAPER
import Wallpaper from "../../../assets/img/wallpaper.jpg";
// // STYLINGCSS
// import "./style.css";
// INTERFACE
import { VerticalButtonGroupProps } from "./interface";

// CONSTANTS
import { buttons } from "./constants";


const Example = () => {
    const handleButtonClick = (text: string) => {
        alert(`Button clicked: ${text}`);
      };
    
  return (
    <>
      
      <VerticalButtonGroup buttons={buttons} />
    </>
  );
};

export default Example;

const VerticalButtonGroup: React.FC<VerticalButtonGroupProps> = ({ buttons }) => {
    
    return (
      <div className="flex flex-col gap-2">
        {buttons.map((button, index) => (
          <button
            key={index}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={button.onClick}
          >
            {button.text}
          </button>
        ))}
      </div>
    );
  };