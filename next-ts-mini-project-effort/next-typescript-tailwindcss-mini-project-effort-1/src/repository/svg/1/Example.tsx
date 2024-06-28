"use client";
// CUSTOM HOOKS
import { useState, useEffect, useMemo } from "react";
// NEXT/IMAGE
import Image from "next/image";
// NEXT/LINK
import Link from "next/link";
// LIBRARY
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactPlayer from "react-player";
import { Link as ScrollLink } from "react-scroll";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import { useTable, useSortBy, Column } from "react-table";
import GaugeChart from "react-gauge-chart";
import { StarIcon } from "@heroicons/react/solid";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
// STYLING
// import "./style.css";

// WALLPAPER
import Wallpaper1 from "../../../assets/img/wallpaper.jpg";
import Wallpaper2 from "../../../assets/img/wallpaper2.jpg";
import Wallpaper3 from "../../../assets/img/wallpaper3.jpg";
import Wallpaper4 from "../../../assets/img/wallpaper4.jpg";
// AUDIO
import Audio1 from "../../../assets/audio/SoundHelix-Song-1.mp3";
import Audio2 from "../../../assets/audio/SoundHelix-Song-2.mp3";
import Audio3 from "../../../assets/audio/SoundHelix-Song-3.mp3";


// INTERFACE

const Example: React.FC = () => {

   
  return (
    
    <>
        <SvgComponent />
    </>
  );
};

export default Example;



const SvgComponent: React.FC<> = ({}) => {
    
return (
    <>
         <div className="flex justify-center items-center h-screen">
      {/* Inline SVG example */}
      <svg
        className="w-12 h-12 text-blue-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
    </div>
    </>
);
};