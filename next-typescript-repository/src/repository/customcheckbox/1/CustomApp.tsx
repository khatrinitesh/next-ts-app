"use client"
import React, { useState } from "react";
import Example from "./Example";


const CustomApp = () => {

    const handleCheckboxChange = (checked: boolean) => {
        console.log('Checkbox checked:', checked);
      };
    

  return (
    <div className="flex justify-center items-center h-screen">
      <Example onChange={handleCheckboxChange}/>
    </div>
  );
};

export default CustomApp;
