"use client";
import React, {useRef , ReactNode,useEffect, useState } from "react";
// import './style.css';
import Link from "next/link";
import Image from "next/image";
import Wallpaper from "../../../assets/img/wallpaper.jpg";
import VideoScreen from "../../../assets/video/movie.mp4";
import axios from 'axios';


const Example:React.FC<> = ({}) => {

    useEffect(() => {
        const googleTranslateElementInit = () => {
          new (window as any).google.translate.TranslateElement(
            {
              pageLanguage: 'en',
              layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
            },
            'google_translate_element'
          );
        };
    
        const addScript = document.createElement('script');
        addScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        document.body.appendChild(addScript);
    
        (window as any).googleTranslateElementInit = googleTranslateElementInit;
      }, []);
  return <div id="google_translate_element" className="translate-element"></div>
};

export default Example;

