"use client";
import React, { useState } from "react";
import Example from "./Example";

const CustomApp = () => {

    const handleClick = () => {
        console.log('adsadd');
        
    }
  return (  
    <>
     <h1 className="text-2xl font-bold mb-4">Download buttons</h1>
     <Example label="asdd" onClick={handleClick} />
    </>
  );
};

export default CustomApp;
