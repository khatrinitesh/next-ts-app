"use client";
import React, { useRef, ReactNode, useEffect, useState } from "react";
// import './style.css';
import Link from "next/link";
import Image from "next/image";
import Wallpaper from "../../../assets/img/wallpaper.jpg";
import VideoScreen from "../../../assets/video/movie.mp4";
import axios from "axios";

const headlines = [
    'Breaking News: Market Hits All-Time High',
    'Latest Update: New Technology Innovations',
    'Top Story: Health Tips for a Better Life',
    'Exclusive: Interview with the CEO',
    'Insights: The Future of Renewable Energy',
  ];


const Example: React.FC<> = ({}) => {
  return (
    <>
     <div className="overflow-hidden whitespace-nowrap">
      <div className="inline-block animate-marquee">
        {headlines.map((headline, index) => (
          <span key={index} className="mx-4 text-lg font-bold">
            {headline}
          </span>
        ))}
      </div>
    </div>
    </>
  );
};

export default Example;
