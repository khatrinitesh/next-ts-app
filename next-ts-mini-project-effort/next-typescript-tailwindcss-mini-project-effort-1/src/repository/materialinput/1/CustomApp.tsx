"use client";
import React, { useState } from "react";
import Example from "./Example";
import Wallpaper from "../../../assets/img/wallpaper.jpg";


const CustomApp = () => {
    const [value, setValue] = useState('');
  return (
    <>
    <Example/>
    </>
  );
};

export default CustomApp;
