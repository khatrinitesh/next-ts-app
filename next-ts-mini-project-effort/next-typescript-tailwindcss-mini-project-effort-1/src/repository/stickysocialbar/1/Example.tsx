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
        <StickySocialbar icons={socialIcons} />
    </>
  );
};

export default Example;


export interface SocialIcon {
    name: string;
    icon: string; // This could be a URL, class name for an icon library (like Font Awesome), or an SVG
    url: string; // URL to the social media profile
  }

  interface SocialIconProps {
    icons: SocialIcon[];
  }
  

const StickySocialbar: React.FC<SocialIconProps> = ({icons }) => {
    return (
        <>  
         <div className="fixed right-4 bottom-4 z-10 flex flex-col gap-4">
      {icons.map((icon, index) => (
        <Link key={index} target="_blank" href={icon.url} className="bg-gray-800 rounded-full p-2 hover:bg-gray-700 transition duration-300"
        target="_blank"
        rel="noopener noreferrer">
            {/* Render the icon component directly */}
            {icon.name === "Facebook" && <FaFacebook className="w-6 h-6 text-white" />}
            {icon.name === "Twitter" && <FaTwitter className="w-6 h-6 text-white" />}
        </Link>
      ))}
    </div>
        </>
    );
  };