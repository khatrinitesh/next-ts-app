"use client";
import React, { useEffect } from "react";
import Example from "./Example";

const CustomApp = () => {
    
  return (
    <div className="flex flex-col justify-center items-center  bg-gray-100">
       <h1 className="text-3xl font-semibold text-center mb-4">Calc CSS</h1>
        <Example width={200} height={50}  />
    </div>
  );
};

export default CustomApp;
