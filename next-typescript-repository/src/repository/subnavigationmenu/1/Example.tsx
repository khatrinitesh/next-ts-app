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

    const subNavItems: SubNavItem[] = [
        { id: 1, label: "Home", href: "/" },
        { id: 2, label: "About", href: "/about" },
        { id: 3, label: "Services", href: "/services" },
        { id: 4, label: "Contact", href: "/contact" },
      ];
   
  return (
    
    <>
        <SubNavComponent items={subNavItems}/>
    </>
  );
};

export default Example;


export interface SubNavItem {
    id:number;
    label:string;
    href:string;
}

export interface SubNavProps{
    items:SubNavItem[];
}

const SubNavComponent: React.FC<SubNavProps> = ({items}) => {
    
return (
    <>
         <nav className="bg-gray-800 text-white">
      <ul className="flex">
        {items.map((item) => (
          <li key={item.id} className="px-4 py-2">
            <Link
              href={item.href}
              className="hover:bg-gray-700 rounded-lg px-3 py-1 block transition duration-300"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
    </>
);
};