"use client";
import React, { useRef, ReactNode, useEffect, useState } from "react";
// import './style.css';
import Link from "next/link";
import Image from "next/image";
import Wallpaper from "../../../assets/img/wallpaper.jpg";
import VideoScreen from "../../../assets/video/movie.mp4";
import axios from "axios";
import { FaSearch } from "react-icons/fa"; // Import an icon from react-icons
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // 
import ModalImage from 'react-modal-image';


interface LightboxProps {
    images: string[];
  }

const Example: React.FC<LightboxProps> = ({
    images
}) => {

   
  return (
    <>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <ModalImage
          key={index}
          small={image}
          large={image}
          alt={`Image ${index}`}
          className="cursor-pointer w-full h-auto"
        />
      ))}
    </div>
    </>
  );
};

export default Example;
