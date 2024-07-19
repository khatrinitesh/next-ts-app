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
import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";
// NEXT/IMAGE
import Image from "next/image";
// NEXT/LINK
import Link from "next/link";
// WALLPAPER
import Wallpaper from "../../../assets/img/wallpaper.jpg";
// STYLINGCSS
import "./style.css";
// INTERFACE

// CONSTANTS

const Example = () => {
  return (
    <>
       <TooltipsComponent text="This is a tooltip" position="bottom">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Hover me
            </button>
        </TooltipsComponent>
    </>
  );
};

export default Example;

interface TooltipProps {
  text: string; // Text content of the tooltip
  position?: "top" | "right" | "bottom" | "left"; // Optional: Position of the tooltip
}

const TooltipsComponent: React.FC<TooltipProps> = ({
  text,
  position = "top",
  children,
}) => {
  return (
    <>
      <div className={`tooltip-container ${position}`}>
        <div className="tooltip-content">{text}</div>
        {children}
      </div>
    </>
  );
};
