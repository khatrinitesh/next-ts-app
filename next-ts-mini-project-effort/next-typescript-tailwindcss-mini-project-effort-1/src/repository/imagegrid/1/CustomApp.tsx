"use client";
import React, { useState } from "react";
import Example from "./Example";
import Wallpaper from "../../../assets/img/wallpaper.jpg";



const CustomApp = () => {

    const images = [Wallpaper,Wallpaper,Wallpaper,Wallpaper,Wallpaper];

    
  return (
    <>
    <Example  images={images}/>
    </>
  );
};

export default CustomApp;
