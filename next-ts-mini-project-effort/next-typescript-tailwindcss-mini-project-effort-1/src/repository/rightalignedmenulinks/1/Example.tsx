"use client";
// custom hooks - state management
import React, { useState, useEffect, useRef } from "react";
// library
import { DocumentIcon, HomeIcon, MenuIcon, UserIcon } from '@heroicons/react/outline'; // Heroicons for menu icon
// next image / link
import Image from "next/image";
import Link from "next/link";
// images
import Wallpaper from "../../../assets/img/wallpaper.jpg";
// interface
import { MenuItemProps } from './interface';
// constants
import { menuitem } from "./constants";


const Example = () => {
   
  return (
    <>
    <ResponsiveTables title="asdad" menuItems={menuitem}/>
    </>
  )
};

export default Example;


const ResponsiveTables: React.FC<MenuItemProps> = ({ title,menuItems }) => {
    return (
      <>
      <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <Link href="/" className="text-white font-bold text-xl">
                {title}
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {/* Menu items aligned to the right */}
                {menuItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.url}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
      </>
    );
  };


