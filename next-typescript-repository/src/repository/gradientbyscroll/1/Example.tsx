"use client";
import React, {useRef , ReactNode,useEffect, useState } from "react";
// import './style.css';
import Link from "next/link";
import Image from "next/image";
import Wallpaper from "../../../assets/img/wallpaper.jpg";
import VideoScreen from "../../../assets/video/movie.mp4";
import axios from 'axios';


const Example:React.FC<> = ({}) => {

  return (
    <>

    </>
  )
};

export default Example;

const GradientBackground = () => {
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        document.documentElement.style.setProperty('--scroll', `${scrollPosition}px`);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return null;
  };
  

