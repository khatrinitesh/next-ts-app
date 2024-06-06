"use client";
import React, { useState } from "react";
import Example from "./Example";
import Wallpaper from "../../../assets/img/wallpaper.jpg";

const CustomApp = () => {

    const images = [
        "../../../assets/img/wallpaper.jpg",
        "../../../assets/img/wallpaper.jpg",
        "../../../assets/img/wallpaper.jpg",
        "../../../assets/img/wallpaper.jpg",
        "../../../assets/img/wallpaper.jpg",
        // Add more image paths as needed
    ]
    
  return (
    <>
    <Example images={images} />
    </>
  );
};

export default CustomApp;
