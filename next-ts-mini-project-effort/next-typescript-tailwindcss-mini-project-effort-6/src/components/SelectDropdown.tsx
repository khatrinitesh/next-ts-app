"use client";
import { SelectDropdownProps } from "@/types";
import React, { useState,useRef ,useEffect  } from "react";

const SelectDropdown: React.FC<SelectDropdownProps> = ({
  options, selectedValue, onChange 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState(selectedValue);
  const selectRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => setIsOpen(!isOpen);

  const handleOptionClick = (value: string) => {
    setCurrentValue(value);
    onChange(value);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
       <div className="custom-select relative" ref={selectRef}>
      <div className="select-styled" onClick={toggleOpen}>
        {options.find(option => option.value === currentValue)?.label || 'Select'}
      </div>
      {isOpen && (
        <ul className="select-options">
          {options.map(option => (
            <li
              key={option.value}
              className={option.value === currentValue ? 'is-selected' : ''}
              onClick={() => handleOptionClick(option.value)}
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

export default SelectDropdown;
