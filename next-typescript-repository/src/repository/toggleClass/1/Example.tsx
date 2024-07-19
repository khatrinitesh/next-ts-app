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
    const [toggle,setToggle] = useState<boolean>(true);

    return (
      <>
        <span className={`text-white  font-bold px-5 py-2 rounded cursor-pointer ${toggle ? 'bg-[red]' : 'bg-[green]'}`}>{toggle ? 'red' : 'green'}</span>
      </>
    );
  };