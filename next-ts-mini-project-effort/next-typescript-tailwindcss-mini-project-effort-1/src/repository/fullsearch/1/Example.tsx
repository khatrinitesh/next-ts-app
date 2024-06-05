"use client";
import React, { ReactNode,useEffect, useState } from "react";
// import './style.css';
import Link from "next/link";
import Image from "next/image";
import Wallpaper from "../../../assets/img/wallpaper.jpg";


const Example:React.FC<> = ({}) => {

    const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleCloseSearch = () => {
    setIsSearchOpen(false);
  };

  return (
    <>
     <button onClick={handleSearchClick} className="fixed bottom-8 right-8 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none">Search</button>
    <SearchOverlay isOpen={isSearchOpen} onClose={handleCloseSearch} />
    </>
  );
};

export default Example;


interface SearchOverlayProps {
    isOpen: boolean;
    onClose: () => void;
  }

const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose }) => {
    return (
      <div className={`fixed inset-0 bg-black bg-opacity-75 z-50 ${isOpen ? 'visible' : 'hidden'}`}>
        <div className="flex justify-center items-center h-full">
          <div className="bg-white rounded-md p-4 w-96">
            <input type="text" placeholder="Search..." className="w-full border border-gray-300 p-2 rounded-md focus:outline-none" />
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-500">&times;</button>
          </div>
        </div>
      </div>
    );
  };
