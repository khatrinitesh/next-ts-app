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
import { SearchFilterProps } from "./interface";
// interface
// constants


const Example = () => {
    const items = [
        { id: 1, name: 'Apple' },
        { id: 2, name: 'Banana' },
        { id: 3, name: 'Orange' },
        { id: 4, name: 'Mango' },
        { id: 5, name: 'Pineapple' },
      ];
   
  return (
    <>
     <SearchFilter items={items}/>
    </>
  )
};

export default Example;

const SearchFilter: React.FC<SearchFilterProps> = ({ items }) => {
    const [query, setQuery] = useState<string>('');
    const [filteredItems, setFilteredItems] = useState<Item[]>(items);
  
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value.toLowerCase();
      setQuery(inputValue);
  
      const filtered = items.filter(item =>
        item.name.toLowerCase().includes(inputValue)
      );
      setFilteredItems(filtered);
    };
  
  
    return (
      <div className="flex flex-col items-center">
        <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
        className="px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <ul className="mt-4">
        {filteredItems.map(item => (
          <li
            key={item.id}
            className="bg-white shadow-md rounded-md p-4 mb-2 flex items-center justify-between"
          >
            <span>{item.name}</span>
            <button
              className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => alert(`Selected: ${item.name}`)}
            >
              Select
            </button>
          </li>
        ))}
      </ul>
      </div>
    );
  };
