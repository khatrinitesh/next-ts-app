"use client";
import React, { useEffect,useState } from "react";


const Example: React.FC<> = ({}) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
    };
     
  return (
    <>
       <div className="flex h-screen items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500">
      <div className="relative text-center">
        <div className="drop drop1"></div>
        <div className="drop drop2"></div>
        <div className="relative text-white">
          <h1 className="text-6xl font-bold font-poppins">Code. Content. Community</h1>
          <p className="text-xl font-montserrat">Both the drops are created using CSS.</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Example;
