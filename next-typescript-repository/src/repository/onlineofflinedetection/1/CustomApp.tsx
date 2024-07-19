"use client";
import React, { useState } from "react";
import Example from "./Example";


const CustomApp:React.FC<{isOnline:boolean}> = ({isOnline}) => {

    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    const closeMenu = () => {
      setIsMenuOpen(false);
    };
 
 
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
       
        <p>Online status: {isOnline ? "Online" : "Offline"}</p>
      </div>
    </>
  );
};

export default CustomApp;
