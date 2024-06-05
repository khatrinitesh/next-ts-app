"use client";
import React, {useRef , ReactNode,useEffect, useState } from "react";
// import './style.css';
import Link from "next/link";
import Image from "next/image";
import Wallpaper from "../../../assets/img/wallpaper.jpg";
import VideoScreen from "../../../assets/video/movie.mp4";
import { google } from 'google-charts';


const Example:React.FC<> = ({}) => {
  return (
    <>
       <div id="chart_div" class="w-full h-64"></div>

    </>
  );
};

export default Example;

