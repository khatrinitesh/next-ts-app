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
// import "./style.css";
// INTERFACE

// CONSTANTS

const Example = () => {
  return (
    <>
      <ToggleText
      />
    </>
  );
};

export default Example;

const ToggleText = () => {
    const [focused, setFocused] = useState<boolean>(false);

    const handleFocus = () => {
        setFocused(true);
    };

    const handleBlur = () => {
        setFocused(false);
    };

    return (
      <>
         <div className="flex flex-col space-y-4">
            <label
                className={`text-gray-600 ${focused ? 'text-blue-500' : ''}`}
                htmlFor="inputField"
            >
                Input Field
            </label>
            <input
                type="text"
                id="inputField"
                onFocus={handleFocus}
                onBlur={handleBlur}
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            />
        </div>
      </>
    );
  };