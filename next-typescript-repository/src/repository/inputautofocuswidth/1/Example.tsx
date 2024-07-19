"use client";
import React, { useRef, ReactNode, useEffect, useState } from "react";
// import './style.css';
import Link from "next/link";
import Image from "next/image";
import Wallpaper from "../../../assets/img/wallpaper.jpg";
import VideoScreen from "../../../assets/video/movie.mp4";
import axios from "axios";
import { FaSearch } from "react-icons/fa"; // Import an icon from react-icons

const Example: React.FC<{ imageUrl: string; overlayText: string }> = ({
  imageUrl,
  altText,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Search:", searchQuery);
    // Implement your search logic here
  };

  return (
    <>
      <nav className="bg-gray-800 p-4 flex items-center justify-between">
        <div className="text-white text-lg font-semibold">
          <Link href="/">MyApp</Link>
        </div>
        <form
          onSubmit={handleSearchSubmit}
          className="flex items-center space-x-2"
        >
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            ref={inputRef}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
            placeholder="Search..."
            style={{
              width: searchQuery
                ? `${Math.max(searchQuery.length, 10)}ch`
                : "10ch",
            }}
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
          >
            Search
          </button>
        </form>
        <div className="text-white space-x-4">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </>
  );
};

export default Example;
