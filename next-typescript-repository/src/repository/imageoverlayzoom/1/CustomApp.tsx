"use client";
import React, { useState } from "react";
import Example from "./Example";
import Wallpaper from "../../../assets/img/wallpaper.jpg";

const CustomApp = () => {
    
  return (
    <>
    <Example  imageUrl={Wallpaper} overlayText="Ullamco elit sunt ullamco ex sit quis magna id ad anim et minim."/>
    </>
  );
};

export default CustomApp;
