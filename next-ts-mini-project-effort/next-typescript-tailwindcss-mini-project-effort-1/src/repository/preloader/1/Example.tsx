"use client";
// custom hooks state management
import React, { useState, useEffect } from "react";
// next image
import Image from "next/image";
// image and video
import Wallpaper from "../../../assets/img/wallpaper.jpg";
// styling
// import './style.css';

const Example = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      // Simulate loading effect
      setTimeout(() => {
        setIsLoading(false); // Set isLoading to false after some delay
      }, 3000); // Example: 3 seconds delay
    }, []);
  
  return (
    <>
       <div className="relative">
      {isLoading && <ExampleComponent />}
      {/* Your main application content */}
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold">Main Content</h1>
        <p className="mt-4">Welcome to your React application!</p>
      </div>
    </div>
    </>
  );
};

export default Example;


const ExampleComponent:React.FC<> = ({}) => {
   
  
    return(
        <>
     <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-gray-800 opacity-75">
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-24 w-24 mb-4"></div>
    </div>
        </>
    )
}
