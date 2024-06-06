"use client";
import React, { useRef, ReactNode, useEffect, useState } from "react";
// import './style.css';
import Link from "next/link";
import Image from "next/image";
import Wallpaper from "../../../assets/img/wallpaper.jpg";
import VideoScreen from "../../../assets/video/movie.mp4";
import axios from "axios";



const Example: React.FC<> = ({}) => {
    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        const handleScroll = () => {
          const div = document.getElementById('scrollableDiv');
          if (div) {
            const scrollPosition = div.scrollTop;
            const firstSection = document.getElementById('section1');
            const secondSection = document.getElementById('section2');
            if (firstSection && secondSection) {
              if (scrollPosition >= firstSection.offsetTop && scrollPosition < secondSection.offsetTop) {
                setActiveLink('section1');
              } else {
                setActiveLink('section2');
              }
            }
          }
        };
    
        document.getElementById('scrollableDiv')?.addEventListener('scroll', handleScroll);
    
        return () => {
          document.getElementById('scrollableDiv')?.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
      const handleClick = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };

    
  return (
    <>
      <nav className="bg-gray-800 text-white">
      <ul className="flex justify-center">
        <li className={`cursor-pointer py-2 px-4 ${activeLink === 'section1' ? 'bg-gray-600' : ''}`} onClick={() => handleClick('section1')}>
          Section 1
        </li>
        <li className={`cursor-pointer py-2 px-4 ${activeLink === 'section2' ? 'bg-gray-600' : ''}`} onClick={() => handleClick('section2')}>
          Section 2
        </li>
      </ul>
    </nav>
    </>
  );
};

export default Example;
