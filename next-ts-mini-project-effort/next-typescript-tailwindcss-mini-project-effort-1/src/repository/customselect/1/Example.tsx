
"use client"
import React, { useRef ,useEffect,useState } from "react";


interface Option {
    label: string;
    value: string;
  }

  interface CustomSelectProps {
    options: Option[];
    placeholder?: string;
    onChange?: (value: string) => void;
  }
  


const Example: React.FC<CustomSelectProps> = ({options,placeholder,onChange}) => {

    const [selectedValue, setSelectedValue] = useState<string>('');
    const [isOpen, setIsOpen] = useState<boolean>(false);
  
    const handleSelect = (value: string) => {
      setSelectedValue(value);
      setIsOpen(false);
      if (onChange) {
        onChange(value);
      }
    };
  
   
  return (
    <>
    <div className="relative inline-block w-64">
      <div
        className="border border-gray-300 bg-white rounded-md p-2 flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedValue || placeholder || 'Select an option'}</span>
        <svg
          className={`w-5 h-5 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>
      {isOpen && (
        <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
          {options.map(option => (
            <li
              key={option.value}
              className="p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
    </>
  );
};

export default Example;
