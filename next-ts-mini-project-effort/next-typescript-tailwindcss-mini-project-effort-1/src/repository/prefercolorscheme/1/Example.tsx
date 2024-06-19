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
  return (
    <>
      <ExampleComponent/>
    </>
  );
};

export default Example;


const ExampleComponent:React.FC<> = ({}) => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    useEffect(() => {
      // Check the user's preferred color scheme
      const prefersDarkMode =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDarkMode(prefersDarkMode);
    }, []);
  
    const toggleDarkMode = () => {
      setIsDarkMode(!isDarkMode);
    };
  
    return(
        <>
        <div
      className={`${
        isDarkMode ? "dark" : "light"
      } bg-background text-text-primary`}
    >
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold">Theme Preference Example</h1>
        <p className="mt-4">
          Toggle between light and dark mode to see the changes.
        </p>
        <button
          className="mt-4 bg-primary text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none"
          onClick={toggleDarkMode}
        >
          Toggle Dark Mode
        </button>
      </div>
    </div>
        </>
    )
}
