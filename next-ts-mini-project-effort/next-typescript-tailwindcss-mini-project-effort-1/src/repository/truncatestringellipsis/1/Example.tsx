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
    <TruncateStringEllipsis text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." maxLength={20}/>
    </>
  );
};

export default Example;

interface TruncateTextProps {
    text: string;
    maxLength: number;
}
const TruncateStringEllipsis: React.FC<TruncateTextProps> = ({text,maxLength}) => {
    if (text.length <= maxLength) {
        return <div>{text}</div>;
    }

    const truncatedText = `${text.slice(0, maxLength)}...`;
  return (
    <> 
        <div className="truncate">
            {truncatedText}
        </div>
    </>
  );
};
