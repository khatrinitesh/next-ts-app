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
    <TypeWriterComponent text="hello, world" delay={100}/>
    </>
  );
};

export default Example;

interface TypewriterProps {
    text: string; // Text to be typed out
    delay?: number; // Optional delay between each character typing (in milliseconds)
}


const TypeWriterComponent:React.FC<TypewriterProps> = ({text,delay=100}) => {

    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
      let charIndex = 0;
      const typeText = () => {
        if (charIndex < text.length) {
          setDisplayText((prevText) => prevText + text.charAt(charIndex));
          charIndex++;
          setTimeout(typeText, delay);
        }
      };
  
      typeText();
  
      return () => {
        // Cleanup function to clear any ongoing timeouts if component unmounts
        clearTimeout();
      };
    }, [text, delay]);
    
    return <span>{displayText}</span>;
  };
  