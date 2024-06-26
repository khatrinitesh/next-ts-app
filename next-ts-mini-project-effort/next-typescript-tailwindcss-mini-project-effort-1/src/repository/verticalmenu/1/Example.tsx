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
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/outline";
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
    const menuItems = [
        { title: 'Home', url: '/' },
        { title: 'About', url: '/about' },
        { title: 'Services', subMenuItems: [
            { title: 'Service 1', url: '/services/service1' },
            { title: 'Service 2', url: '/services/service2' },
          ]
        },
        { title: 'Contact', url: '/contact' },
      ];
    
  return (
    <>
       <VerticalMenu menuItems={menuItems} />
      <main className="flex-1 p-4">
        {/* Main content of the application */}
        <h1 className="text-2xl font-bold">Main Content</h1>
        <p>This is the main content area.</p>
      </main>
    </>
  );
};

export default Example;

interface MenuItem {
    title: string;
    url?: string;
    subMenuItems?: MenuItem[];
  }
  
  interface VerticalMenuProps {
    menuItems: MenuItem[];
  }

const VerticalMenu: React.FC<VerticalMenuProps> = ({menuItems}) => {
    return (
      <>
      <div className="bg-gray-800 text-white w-64">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Menu</h2>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index} className="py-2">
              {item.url ? (
                <a href={item.url} className="hover:text-gray-300">{item.title}</a>
              ) : (
                <span className="cursor-pointer">{item.title}</span>
              )}
              {item.subMenuItems && (
                <ul className="ml-4">
                  {item.subMenuItems.map((subItem, subIndex) => (
                    <li key={subIndex} className="py-1">
                      <a href={subItem.url} className="hover:text-gray-300">{subItem.title}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
      </>
    );
  };