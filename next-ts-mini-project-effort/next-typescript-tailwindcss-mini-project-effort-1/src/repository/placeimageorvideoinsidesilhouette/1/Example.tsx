"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Wallpaper from "../../../assets/img/wallpaper.jpg";
import VideoMovie from "../../../assets/video/movie.mp4";
// import { VideoMovie, WallpaperAA } from "@/assets";

const Example = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-3xl font-bold mb-4">Silhouette Example</h1>
        <div className="w-96 h-96">
          <Silhouette imageSrc={Wallpaper} videoSrc={VideoMovie} />
        </div>
      </div>
    </>
  );
};

export default Example;

interface SilhouetteProps {
  imageSrc: string; // image source URL
  videoSrc: string; // optional video source URL                                    
}

const Silhouette: React.FC<SilhouetteProps> = ({ imageSrc, videoSrc }) => {
  return (
    <>
      <div className="relative w-full h-full overflow-hidden">
        {/* Silhouette shape */}
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Image or video */}
            {videoSrc ? (
               <video width="320" src={videoSrc} height="240" controls preload="none">
               
             </video>
            ) : (
              <Image
                src={imageSrc}
                alt="Silhouette"
                className="w-full h-full object-cover"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
