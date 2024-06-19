"use client"
import React,{useState,useEffect  } from "react";
import Image from "next/image";

const Example = () => {
    const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
    // Add navigation logic here, e.g., change route or update state
  };

  const navItems = [
    { text: "Home", link: "/" },
    { text: "About", link: "/about" },
    { text: "Services", link: "/services" },
    { text: "Contact", link: "/contact" },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-3xl font-bold mb-4">Pill Navigation Example</h1>
      <PillNavigation
        items={navItems}
        activeIndex={activeIndex}
        onItemClick={handleItemClick}
      />
    </div>
    </>
  );
};

export default Example;

interface NavigationProps{
    items:{
        text:string;
        link:string;
    }[];
    activeIndex:number;
    onItemClick:(index:number) => void;
}

const PillNavigation:React.FC<NavigationProps> = ({items,activeIndex,onItemClick}) => {
    return(
        <>
        <nav className="flex justify-center">
      <ul className="flex space-x-4">
        {items.map((item, index) => (
          <li key={index}>
            <button
              className={`px-4 py-2 rounded-full ${
                activeIndex === index
                  ? "bg-blue-500 text-white"
                  : "text-blue-500"
              } hover:bg-blue-500 hover:text-white focus:outline-none`}
              onClick={() => onItemClick(index)}
            >
              {item.text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
        </>
    )
}

