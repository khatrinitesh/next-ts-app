"use client";
// styling
// import './custom.css';
// custom hooks - state management
import React, { useState, useEffect, useRef } from "react";
// library
import { ArrowUpIcon, DocumentIcon, HomeIcon, MenuIcon, UserIcon } from '@heroicons/react/outline'; // Heroicons for menu icon
// next image / link
import Image from "next/image";
import Link from "next/link";
// images
import Wallpaper from "../../../assets/img/wallpaper.jpg";
import { SearchBarProps } from "./interface";
// interface
// constants


const Example = () => {
    const handleSearch = (query: string) => {
        alert(`Searching for: ${query}`);
        // Implement your search logic here
      };
    
    
  return (
    <>
     <SearchBar onSearch={handleSearch} />
    </>
  )
};

export default Example;

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [query, setQuery] = useState<string>('');
  
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(event.target.value);
    };
  
    const handleSearch = () => {
      onSearch(query);
    };
  
    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        handleSearch();
      }
    };
  
    return (
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          className="px-4 py-2 w-64 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSearch}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Search
        </button>
      </div>
    );
  };
