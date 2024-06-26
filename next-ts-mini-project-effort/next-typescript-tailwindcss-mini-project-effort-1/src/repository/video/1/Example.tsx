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
import ReactPlayer from 'react-player';
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
       <ReactPlayer url="https://www.w3schools.com/html/mov_bbb.mp4"/>
    </>
  );
};

export default Example;

interface VideoPlayerProps {
    url: string; // URL of the video
  }

const VerticalMenu: React.FC<VideoPlayerProps> = ({url}) => {
    return (
      <>
       <div className="w-full max-w-screen-lg mx-auto">
      <ReactPlayer
        url={url}
        controls={true}
        width="100%"
        height="auto"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </div>
      </>
    );
  };