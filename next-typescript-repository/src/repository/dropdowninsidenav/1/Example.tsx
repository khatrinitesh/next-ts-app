"use client";
import React, { useEffect,useState } from "react";





const Example: React.FC<> = ({}) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
    };
     
  return (
    <>
      <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
      <div className="p-4">
        <h2 className="text-xl font-semibold">Sidenav</h2>
      </div>
      <nav className="flex-grow">
        <ul className="space-y-2">
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-700">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-700">
              About
            </a>
          </li>
          <li>
            <button
              onClick={toggleDropdown}
              className="block w-full text-left px-4 py-2 hover:bg-gray-700 focus:outline-none"
            >
              Services
            </button>
            {dropdownOpen && (
              <ul className="pl-4 mt-2 space-y-2">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                    App Development
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                    SEO Services
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-700">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
    </>
  );
};

export default Example;
