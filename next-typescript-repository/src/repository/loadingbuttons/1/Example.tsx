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
import Spinner from "./Spinner";

type LoadingButtonProps = {
    onClick:() => Promise<void>;
    children:React.ReactNode;
}

const Example: React.FC<LoadingButtonProps> = ({onClick,children}) => {
        const [loading, setLoading] = useState(false);

        const handleClick = async () => {
            setLoading(true);
            await onClick();
            setLoading(false);
          };
        
   
  return (
    <>
       <button
      onClick={handleClick}
      className={`flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded ${loading ? 'cursor-not-allowed' : ''}`}
      disabled={loading}
    >
      {loading ? <Spinner /> : children}
    </button>
    </>
  );
};

export default Example;
