"use client";
import React, {useRef , ReactNode,useEffect, useState } from "react";
// import './style.css';
import Link from "next/link";
import Image from "next/image";
import Wallpaper from "../../../assets/img/wallpaper.jpg";
import VideoScreen from "../../../assets/video/movie.mp4";


const Example:React.FC<> = ({}) => {
  return (
    <>
         <div className="w-full h-screen">
      <iframe
        title="Google Maps"
        width="100%"
        height="100%"
        frameBorder="0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.78159262947!2d-122.41941506530865!3d37.77492953295308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858082f1dbb055%3A0x7bbcaacb8f5d8b35!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1622844694177!5m2!1sen!2sin"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
    </>
  );
};

export default Example;

