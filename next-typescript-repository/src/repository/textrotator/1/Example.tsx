"use client";
// custom hooks - state management
import React, { useState, useEffect, useRef } from "react";
// library
// next image
import Image from "next/image";
import Link from "next/link";
// interface
import Wallpaper from "../../../assets/img/wallpaper.jpg";
import { ROTATING_TEXTS } from "./constants";
import { RotatingText } from './interface';
import './style.css';


const Example = () => {
   
  return (
    <>
      <TextRotator/>
    </>
  )
};

export default Example;


const TextRotator:React.FC  = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
      const interval = setInterval(() => {
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % ROTATING_TEXTS.length);
      }, 1000); // Change text every 3 seconds (adjust as needed)

      return () => clearInterval(interval);
  }, []);

    return(
        <>
        <div className="text-rotator-container">
            {ROTATING_TEXTS.map((text, index) => (
                <p key={index} className={`text-rotator-text ${index === currentTextIndex ? 'active' : ''}`}>
                    {text}
                </p>
            ))}
        </div>
        </>
    )
}