"use client"
import React, { useState } from "react";
import Example from "./Example";

const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];


const CustomApp = () => {
   
  return (
    <>
    <Example text="hhi" backgroundImage="https://static.vecteezy.com/system/resources/thumbnails/025/067/762/small_2x/4k-beautiful-colorful-abstract-wallpaper-photo.jpg"/>
    </>
  );
};

export default CustomApp;
