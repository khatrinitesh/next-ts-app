"use client";
import React, { useState } from "react";
import Example from "./Example";
import Wallpaper from "../../../assets/img/wallpaper.jpg";



const CustomApp = () => {


    
  return (
    <>
    <Example  imageUrl={Wallpaper}/>
    </>
  );
};

export default CustomApp;
