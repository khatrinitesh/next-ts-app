"use client";
import React, { useEffect,useState } from "react";


const Example: React.FC<> = ({}) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
    };
     
  return (
    <>
      <div className="bg-gray-800 text-white px-4 py-3 flex items-center justify-between">
      <div className="text-xl font-semibold">MyApp</div>
      <nav className="flex space-x-4">
        <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded">Home</a>
        <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded">About</a>
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="hover:bg-gray-700 px-3 py-2 rounded focus:outline-none"
          >
            Services
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg z-10">
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">Web Development</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">App Development</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">SEO Services</a>
            </div>
          )}
        </div>
        <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded">Contact</a>
      </nav>
    </div>
    </>
  );
};

export default Example;
