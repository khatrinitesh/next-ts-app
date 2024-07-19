"use client";
// custom hooks state management
import React, { useState, useEffect } from "react";
// next image
import Image from "next/image";
// image and video
import Wallpaper from "../../../assets/img/wallpaper.jpg";
import VideoMovie from "../../../assets/video/movie.mp4";

const Example = () => {

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const videoId = "gDWn1kCnz3M"; // Replace with your YouTube video ID
  
    const openPopup = () => {
      setIsPopupOpen(true);
    };
  
    const closePopup = () => {
      setIsPopupOpen(false);
    };
    
  return (
    <>
     <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-3xl font-bold mb-4">Popup Video Example</h1>
      <button
        onClick={openPopup}
        className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none"
      >
        Open Video
      </button>
      <PopupVideo videoId={videoId} isOpen={isPopupOpen} onClose={closePopup} />
    </div>
    </>
  );
};

export default Example;

interface PopupVideoProps {
    videoId: string;
    isOpen: boolean;
    onClose: () => void;
  }

  const PopupVideo: React.FC<PopupVideoProps> = ({ videoId, isOpen, onClose }) => {
    if (!isOpen) return null;
  
    return (
      <div onClick={onClose} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="relative w-96 h-80 bg-white rounded-lg shadow-lg">
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 focus:outline-none"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="relative h-full">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
              title="YouTube Video Player"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    );
  };