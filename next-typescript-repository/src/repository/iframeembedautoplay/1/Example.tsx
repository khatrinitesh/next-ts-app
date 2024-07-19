"use client";
import React, { useRef, ReactNode, useEffect, useState } from "react";
// import './style.css';
import Link from "next/link";
import Image from "next/image";
import Wallpaper from "../../../assets/img/wallpaper.jpg";
import VideoScreen from "../../../assets/video/movie.mp4";
import axios from "axios";

interface EmbedIframeProps {
  src: string; // URL of the iframe content
}

const Example: React.FC<EmbedIframeProps> = ({ src }) => {
  return (
    <>
      {" "}
      <div className="aspect-w-16 aspect-h-9">
        {" "}
        {/* Maintain aspect ratio 16:9 */}
        <iframe
          src={src}
          className="absolute inset-0 w-full h-full"
          allow="autoplay" // Allow autoplay
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default Example;
