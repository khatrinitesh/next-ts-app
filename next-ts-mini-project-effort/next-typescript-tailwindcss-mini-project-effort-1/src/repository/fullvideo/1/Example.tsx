"use client";
import React, {useRef , ReactNode,useEffect, useState } from "react";
// import './style.css';
import Link from "next/link";
import Image from "next/image";
import Wallpaper from "../../../assets/img/wallpaper.jpg";
import VideoScreen from "../../../assets/video/movie.mp4";


const Example:React.FC<> = ({}) => {
  return (
    <>
     <FullscreenVideo src="../../../assets/video/movie.mp4"/>
    </>
  );
};

export default Example;

interface FullscreenVideoProps {
  src: string;
}

const FullscreenVideo: React.FC<FullscreenVideoProps> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.addEventListener('click', toggleFullScreen);
    }

    return () => {
      if(video){
        video.removeEventListener('click',toggleFullScreen);
      }
    }
  }, []);

  const toggleFullScreen = () => {
    const video = videoRef.current;
    if (video) {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      }
    }
  };

  return (
    <video ref={videoRef} controls className="w-full h-full object-cover">
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};
