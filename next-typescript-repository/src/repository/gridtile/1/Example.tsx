"use client";
import React, { useRef, ReactNode, useEffect, useState } from "react";
// import './style.css';
import Link from "next/link";
import Image from "next/image";
import Wallpaper from "../../../assets/img/wallpaper.jpg";
import VideoScreen from "../../../assets/video/movie.mp4";
import axios from "axios";


interface GridTileProps {
    title: string;
    description: string;
    bgColor: string;
  }

const Example: React.FC<GridTileProps> = ({title,description,bgColor}) => {
  return (
    <>
      <div className={`${bgColor} p-6 rounded-lg shadow-lg`}>
      <h2 className="text-xl font-bold mb-2 text-white">{title}</h2>
      <p className="text-white">{description}</p>
      </div>
    </>
  );
};

export default Example;
