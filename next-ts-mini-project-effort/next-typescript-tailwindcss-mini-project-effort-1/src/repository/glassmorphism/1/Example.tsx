"use client";
import React, {useRef , ReactNode,useEffect, useState } from "react";
import './style.css';
import Link from "next/link";
import Image from "next/image";
import Wallpaper from "../../../assets/img/wallpaper.jpg";
import VideoScreen from "../../../assets/video/movie.mp4";


const Example:React.FC<> = ({}) => {

  
  return (
    <>
       <div className="glass-panel max-w-screen-md mx-auto bg-opacity-10 bg-white bg-blur-10 border border-opacity-10 rounded-lg p-8">
      <h1>
        <a href="https://superdevresources.com/glassmorphism-ui-css/" target="_blank" className="text-white">
          Glassmorphism CSS Panels and Buttons
        </a>
      </h1>
      <p className="text-white text-opacity-60">Glassmorphism is achieved using transparency and background blur to get a frosted-glass like effect.</p>
      <div className="glass-toolbar">
        <button className="glass-button">Glass Button</button>
        <a href="https://superdevresources.com/glassmorphism-ui-css/" target="_blank" className="glass-button">Glass Link Button</a>
      </div>
    </div>
    </>
  );
};

export default Example;

