"use client";
import React, { useEffect } from "react";
import Example from "./Example";

const CustomApp = () => {
    const data: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
    
  return (
    <div className="flex justify-center items-center  bg-gray-100">
       <h1 className="text-3xl font-semibold text-center mb-4">Bullet List Example</h1>
        <Example items={data} />
    </div>
  );
};

export default CustomApp;
