"use client";
import React, { useState } from "react";
import Wallpaper from "../../../assets/img/wallpaper.jpg";
// import './style.css';
import Link from "next/link";
import Image from "next/image";


const Example: React.FC<> = ({  }) => {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);

    const toggleOverlay = () => {
      setIsOverlayOpen(!isOverlayOpen);
    };
  
    const closeOverlay = () => {
      setIsOverlayOpen(false);
    };
  return (
    <>
        <button
        onClick={toggleOverlay}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
      >
        Toggle Overlay
      </button>
      <Overlay isOpen={isOverlayOpen} onClose={closeOverlay}/>
    </>
  );
};

export default Example;

interface OverlayProps {
    isOpen: boolean;
    onClose: () => void;
  }

  const Overlay: React.FC<OverlayProps> = ({ isOpen, onClose }) => {
    return (
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      ></div>
    );
  };
