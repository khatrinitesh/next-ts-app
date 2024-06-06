"use client";
import React, { useState } from "react";
import Example from "./Example";
import Wallpaper from "../../../assets/img/wallpaper.jpg";



const CustomApp = () => {

    const handleButtonClick = () => {
        // Handle button click event
        console.log('Button clicked');
      };

    
  return (
    <>
    <Example  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"/>
    </>
  );
};

export default CustomApp;
