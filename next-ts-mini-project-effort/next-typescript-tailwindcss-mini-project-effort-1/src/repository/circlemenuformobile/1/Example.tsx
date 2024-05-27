
"use client"
import React,{useState} from "react";


interface MenuItem {
    label: string;
    icon: JSX.Element;
    onClick: () => void;
  }

  interface CircleMenuProps {
    menuItems: MenuItem[];
  }

const Example: React.FC<MenuItem> = ({  menuItems}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  return (
    <>
      <div className="relative">
      <button
        className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center"
        onClick={toggleMenu}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute top-0 left-0 w-64 h-64">
        {menuItems.map((item, index) => {
          const angle = (index * 360) / menuItems.length;
          const transform = `rotate(${angle}deg) translate(8rem) rotate(-${angle}deg)`;
          return (
            <button
              key={index}
              className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center absolute"
              style={{ transform }}
              onClick={item.onClick}
            >
              {item.icon}
            </button>
          );
        })}
      </div>
      )}
      </div>
    </>
  );
};

export default Example;
