"use client";
// styling
// import './custom.css';
// custom hooks - state management
import React, { useState, useEffect, useRef } from "react";
// library
import {
  ArrowUpIcon,
  DocumentIcon,
  HomeIcon,
  MenuIcon,
  UserIcon,
} from "@heroicons/react/outline"; // Heroicons for menu icon
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
        { id: 1, label: 'Apple' },
        { id: 2, label: 'Banana' },
        { id: 3, label: 'Orange' },
        { id: 4, label: 'Mango' },
        { id: 5, label: 'Pineapple' },
      ];
  return (
    <>
      <SearchMenu items={items} />
    </>
  );
};

export default Example;

const SearchMenu: React.FC<SearchMenuProps> = ({ items }) => {
  const [query, setQuery] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [filteredItems, setFilteredItems] = useState<MenuItem[]>(items);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.toLowerCase();
    setQuery(inputValue);

    const filtered = items.filter((item) =>
      item.label.toLowerCase().includes(inputValue)
    );
    setFilteredItems(filtered);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = (item: MenuItem) => {
    alert(`Selected: ${item.label}`);
    setIsOpen(false);
    setQuery("");
  };

  return (
    <div className="relative">
       <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
        onFocus={() => setIsOpen(true)}
        className="px-4 py-2 w-64 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {isOpen && (
        <ul className="absolute z-10 w-64 mt-2 bg-white border border-gray-300 rounded-md shadow-md">
          {filteredItems.map(item => (
            <li
              key={item.id}
              onClick={() => handleMenuItemClick(item)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
