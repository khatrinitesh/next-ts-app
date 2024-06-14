"use client";
import React, { useState } from "react";
import Example from "./Example";


const CustomApp = () => {

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
       
        <Example isOpen={isMenuOpen} onClose={closeMenu} />
      </div>
    </>
  );
};

export default CustomApp;
