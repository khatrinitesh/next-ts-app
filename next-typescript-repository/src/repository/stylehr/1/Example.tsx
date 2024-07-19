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
        <HrComponent/>
    </>
  );
};

export default Example;

const hrStyle = {
    border: "2px solid #ccc",
    margin: "20px 0",
  };

  const HrComponent: React.FC = () => {
    return (
      <div className="mx-auto max-w-lg p-4">
        <h1 className="text-3xl font-bold mb-4">Styled Horizontal Rule</h1>
        <hr style={hrStyle} />
        <p className="text-gray-700">
          This is a paragraph below the styled horizontal rule.
        </p>
      </div>
    );
  };