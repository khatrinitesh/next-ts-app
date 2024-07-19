"use client";
// custom hooks state management
import React, { useState, useEffect } from "react";
// next image
import Image from "next/image";
// image and video
import Wallpaper from "../../../assets/img/wallpaper.jpg";
import VideoMovie from "../../../assets/video/movie.mp4";

const Example = () => {
  return (
    <>
     <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-3xl font-bold mb-4">YouTube Video Player Example</h1>
      <YouTubePlayer videoId="gDWn1kCnz3M" />
    </div>
    </>
  );
};

export default Example;

interface YouTubePlayerProps {
    videoId: string; // YouTube video ID
  }

  const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ videoId }) =>{
    const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  return(
    <>
    <div className="flex flex-col items-center">
      {!isPlaying ? (
        <button
          onClick={handlePlayVideo}
          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none"
        >
          Play Video
        </button>
      ) : (
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="w-[500px] h-[300px] object-contain aspect-square"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
            title="YouTube Video Player"
            allowFullScreen
          />
        </div>
      )}
    </div>
    </>
  )
  }


