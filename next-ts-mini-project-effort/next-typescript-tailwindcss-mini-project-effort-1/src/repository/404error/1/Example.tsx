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
        <ErrorComponent />
    </>
  );
};

export default Example;


export interface ErrorPageProps {
    statusCode: number;
  }

const ErrorComponent: React.FC<ErrorPageProps> = ({statusCode}) => {
    
return (
    <>
        <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-lg w-full p-8 bg-white shadow-lg rounded-lg text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-2xl text-gray-600 mt-4">
          Oops! The page you're looking for does not exist.
        </p>
        <p className="text-lg text-gray-600 mt-2">
          Error code: {statusCode}
        </p>
        <a
          href="/"
          className="text-blue-500 mt-4 inline-block px-4 py-2 bg-blue-100 hover:bg-blue-200 rounded-lg transition duration-300"
        >
          Go back to home
        </a>
      </div>
    </div>
    </>
);
};