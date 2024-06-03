
"use client"
import React, { useEffect,useState } from "react";

interface CustomCheckboxProps {
    label: string;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
}

const Example: React.FC<CustomCheckboxProps> = ({label,checked=false,onChange }) => {
    const [isChecked, setIsChecked] = useState(checked);

    const handleCheckboxChange = () => {
      const newCheckedState = !isChecked;
      setIsChecked(newCheckedState);
      if (onChange) {
        onChange(newCheckedState);
      }
    };
  return (
    <>
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="hidden"
      />
      <span
        className={`w-6 h-6 inline-block mr-2 rounded border-2 border-gray-500 flex-shrink-0 ${
          isChecked ? 'bg-blue-500 border-blue-500' : 'bg-white'
        } transition duration-200 ease-in-out`}
      >
        {isChecked && (
          <svg
            className="w-4 h-4 text-white mx-auto mt-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        )}
      </span>
      <span>{label}</span>
    </label>
    </>
  );
};

export default Example;
