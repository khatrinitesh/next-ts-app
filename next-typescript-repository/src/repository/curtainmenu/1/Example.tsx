
"use client"
import React, { useEffect,useState } from "react";



const Example: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <div className="relative">
    <button
        onClick={toggleMenu}
        className="p-2 bg-blue-500 text-white fixed top-4 left-4 z-50"
      >
        {isOpen ? 'close' : 'open'}
      </button>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-gray-800 text-white transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-500 ease-in-out`}
      >
        <div className="p-4">
          <h1 className="text-2xl mb-4">Curtain Menu</h1>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                About
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Services
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default Example;
