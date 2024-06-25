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
    const [checked, setChecked] = useState(true);
  return (
    <>
      <ToggleText
      />
    </>
  );
};

export default Example;

const ToggleText = () => {
    const [text,setText] = useState('Example 1');
    const [toggle,setToggle] = useState(false)

    const handleToggle = () => {
        setText(!text)
    }
    return (
      <>
        <button onClick={handleToggle} className="bg-slate-700 text-white rounded rounded px-8 py-2">
            CLick toggle
        </button>
        {toggle ? 'Example 2' : 'Example 1'}
      </>
    );
  };