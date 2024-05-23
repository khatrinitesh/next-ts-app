"use client";
import React, { useEffect } from "react";
import Example from "./Example";

const CustomApp = () => {
    const handleClick = () => {
        alert('Button clicked!');
      };
  return (
    <div className="flex justify-center items-center  bg-gray-100">
       <h1 className="text-3xl font-semibold text-center mb-4">Button on image</h1>
        <Example imageUrl="https://via.placeholder.com/300" buttonText="Click me!" onClick={handleClick}  />
    </div>
  );
};

export default CustomApp;
