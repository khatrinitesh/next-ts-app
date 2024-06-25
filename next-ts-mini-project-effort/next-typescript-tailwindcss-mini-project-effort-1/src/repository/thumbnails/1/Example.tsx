"use client";
// custom hooks - state management
import React, { useState, useEffect, useRef } from "react";

// NEXT/IMAGE
import Image from "next/image";
// NEXT/LINK
import Link from "next/link";
// WALLPAPER
import Wallpaper from "../../../assets/img/wallpaper.jpg";
// STYLINGCSS
// import "./style.css";
// CONSTANTS
import { THUMBNAILS } from "./constants";
// INTERFACE
import { Thumbnail } from "./interface";

const Example = () => {
  return (
    <>
       <div className="grid grid-cols-3 gap-4">
            {THUMBNAILS.map((thumbnail: Thumbnail) => (
                <div key={thumbnail.id} className="p-4  cursor-pointer border border-gray-300 rounded-lg">
                    <Image src={thumbnail.imageUrl} alt={thumbnail.title} className="w-full h-auto rounded-lg" />
                    <p className="mt-2 text-center">{thumbnail.title}</p>
                </div>
            ))}
        </div>
    </>
  );
};

export default Example;
