
"use client"
import React, { useRef ,useEffect,useState } from "react";


interface CustomRadioButtonProps {
    label: string;
    name: string;
    value: string;
    checked?: boolean;
    onChange?: (value: string) => void;
  }

const Example: React.FC<CustomRadioButtonProps> = ({label,name,value,checked=false,onChange }) => {
    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
          onChange(event.target.value);
        }
      };
  return (
    <>
   <label className="inline-flex items-center cursor-pointer">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={handleRadioChange}
        className="hidden"
      />
      <span
        className={`w-6 h-6 inline-block mr-2 rounded-full border-2 border-gray-500 flex-shrink-0 ${
          checked ? 'bg-blue-500 border-blue-500' : 'bg-white'
        } transition duration-200 ease-in-out`}
      >
        {checked && (
          <svg
            className="w-4 h-4 text-white mx-auto my-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="6" fill="currentColor"></circle>
          </svg>
        )}
      </span>
      <span>{label}</span>
    </label>
    </>
  );
};

export default Example;
