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
    <Example  icon={
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            ></path>
          </svg>
        }
        label="Button 1"
        onClick={handleButtonClick} />
    </>
  );
};

export default CustomApp;
