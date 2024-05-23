"use client";
import React, { useEffect } from "react";
import Example from "./Example";

const CustomApp = () => {
    
  return (
    <div className="flex flex-col justify-center items-center  bg-gray-100">
       <h1 className="text-3xl font-semibold text-center mb-4">Button on image</h1>
        <Example initialDisplay=""  />
    </div>
  );
};

export default CustomApp;
