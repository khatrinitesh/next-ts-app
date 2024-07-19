"use client";
// custom hooks - state management
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";
// LIBRARY
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/outline';
// NEXT/IMAGE
import Image from "next/image";
// NEXT/LINK
import Link from "next/link";
// WALLPAPER
import Wallpaper from "../../../assets/img/wallpaper.jpg";
// // STYLINGCSS
// import "./style.css";
// INTERFACE

// CONSTANTS

const Example = () => {

  return (
    <>
    <TriggerButtonEvent/>
    </>
  );
};

export default Example;


const TriggerButtonEvent: React.FC<TreeViewProps> = ({data}) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleButtonClick = () => {
        alert(`Button clicked with value: ${inputValue}`);
        // Add your button click logic here
    };

    const handleInputKeyDown = (event) => {
        if (event.key === 'Enter') {
            // Prevent form submission if using inside a form
            event.preventDefault();
            // Trigger button click programmatically
            document.getElementById('submitButton').click();
        }
    };
   

    
  return (
    <> 
    <div className="flex items-center justify-center h-screen">
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
                className="border border-gray-300 p-2 mr-2"
                placeholder="Type something..."
            />
            <button
                id="submitButton"
                onClick={handleButtonClick}
                className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
            >
                Submit
            </button>
        </div>
    </>
  );
};
