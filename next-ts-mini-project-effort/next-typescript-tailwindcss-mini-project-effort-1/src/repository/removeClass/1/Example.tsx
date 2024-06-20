"use client";
// custom hooks - state management
import React, { useState, useEffect, useRef } from "react";
// library
// next image
import Image from "next/image";
// interface

// constants

const Example = () => {
  return (
    <>
    <ResponsiveFloatComponent/>
    </>
  );
};

export default Example;

interface Item{
    id:number;
    name:string;
}

const ResponsiveFloatComponent: React.FC<> = ({}) => {
   
  return (
    <>
     <button
        className={`px-4 py-2 rounded-md ${isActive ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}
        onClick={toggleActive}  
      >
        {isActive ? 'Active' : 'Inactive'}
      </button>
    </>
  )
};
