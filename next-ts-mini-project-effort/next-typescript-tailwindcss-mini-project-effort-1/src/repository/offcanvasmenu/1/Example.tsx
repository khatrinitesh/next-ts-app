"use client";
import React, { useState } from "react";
import Wallpaper from "../../../assets/img/wallpaper.jpg";
// import './style.css';
import Link from "next/link";
import Image from "next/image";

interface OffCanvasMenuProps {
    isOpen: boolean;
    onClose: () => void;
  }
  

const Example: React.FC<NotificationButtonProps> = ({isOpen,onClose}) => {
  return (
    <>
     <div
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 ${
        isOpen ? "" : "hidden"
      }`}
      onClick={onClose}
    >
      <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg">
        <div className="p-4">
          <h2 className="text-xl font-bold">Menu</h2>
          <ul className="mt-4">
            <li className="py-2">Home</li>
            <li className="py-2">About</li>
            <li className="py-2">Services</li>
            <li className="py-2">Contact</li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default Example;
