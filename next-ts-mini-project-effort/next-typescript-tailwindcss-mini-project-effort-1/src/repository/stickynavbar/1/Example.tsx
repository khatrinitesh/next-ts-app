"use client";
// CUSTOM HOOKS
import { useState, useEffect, useMemo } from "react";
// NEXT/IMAGE
import Image from "next/image";
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

    const navLinks = [
        { label: 'Home', url: '/' },
        { label: 'About', url: '/about' },
        { label: 'Services', url: '/service' },
        { label: 'Contact', url: '/contact' },
      ];
  
  return (
    <>
        <StickyNavbar links={navLinks} />
    </>
  );
};

export default Example;



  interface NavLink{
    label:string;
    url:string;
  }

  interface StickyNavbarProps{
    links:NavLinks[];
  }

const StickyNavbar: React.FC<StickyNavbarProps> = ({ links }) => {
    return (
        <nav className="sticky top-0 z-50 bg-gray-800 text-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-lg font-bold">Logo</h1>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {links.map((link, index) => (
              <a key={index} href={link.url} className="text-gray-300 hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    );
  };