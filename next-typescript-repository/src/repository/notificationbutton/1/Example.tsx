"use client";
import React, { useState } from "react";
import Wallpaper from "../../../assets/img/wallpaper.jpg";
// import './style.css';
import Link from "next/link";
import Image from "next/image";

interface NotificationButtonProps {
    count: number;
    onClick: () => void;
  }
  

const Example: React.FC<NotificationButtonProps> = ({count,onClick}) => {
  return (
    <>
      <button
      onClick={onClick}
      className="relative bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
    >
      Notifications
      {count > 0 && (
        <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
          {count}
        </span>
      )}
    </button>
    </>
  );
};

export default Example;
