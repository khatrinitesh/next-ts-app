"use client";
import React, { useEffect,useState } from "react";


const Example: React.FC<> = ({}) => {
     
  return (
    <>
     <div
      className="relative w-64 h-64 bg-gray-200 flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`absolute inset-0 bg-black opacity-50 ${isHovered ? "block" : "hidden"}`}></div>
      <div className={`absolute inset-0 flex items-center justify-center ${isHovered ? "block" : "hidden"}`}>
        <p className="text-white text-lg font-semibold">Hover to Display</p>
      </div>
    </div>
    </>
  );
};

export default Example;
