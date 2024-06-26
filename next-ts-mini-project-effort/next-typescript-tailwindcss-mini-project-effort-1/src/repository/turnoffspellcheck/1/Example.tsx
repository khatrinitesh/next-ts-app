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
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/outline';
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

  return (
    <>
    <MyComponent/>
    </>
  );
};

export default Example;

const MyComponent: React.FC = () => {
    return (
      <div>
        <input type="text" spellCheck="on" className="border" />
      </div>
    );
  };