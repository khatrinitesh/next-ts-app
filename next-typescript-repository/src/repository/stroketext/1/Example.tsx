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

    const socialIcons: SocialIcon[] = [
        { name: 'Facebook', icon: FaFacebook, url: 'https://www.facebook.com/yourpage/' },
        { name: 'Twitter', icon: FaTwitter, url: 'https://twitter.com/yourhandle/' },
        // Add more social icons as needed
      ];

   
  return (
    
    <>
        <StrokeTextComponent    text="Stroked Text Example"
        strokeWidth={2}
        fontSize="text-4xl"
        textColor="text-blue-600"
        strokeColor="text-gray-200"/>
    </>
  );
};

export default Example;


export interface StrokeTextProps {
    text: string;
    strokeWidth?: number;
    fontSize?: string;
    textColor?: string;
    strokeColor?: string;
  }

  const StrokeTextComponent: React.FC<StrokeTextProps> = ({
    text,
    strokeWidth = 2,
    fontSize = "text-2xl",
    textColor = "text-black",
    strokeColor = "text-white",
  }) => {
    return (
      <div className={`relative inline-block ${fontSize}`}>
        <span
          className={`${strokeColor} absolute top-0 left-0 z-10`}
          style={{
            WebkitTextStroke: `${strokeWidth}px ${textColor}`,
            color: textColor,
          }}
        >
          {text}
        </span>
        <span className={textColor}>{text}</span>
      </div>
    );
  };