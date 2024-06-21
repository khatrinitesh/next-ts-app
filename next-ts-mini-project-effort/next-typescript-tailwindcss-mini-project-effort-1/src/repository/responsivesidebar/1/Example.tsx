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

// constants

export interface SidebarItem {
    label: string;
    icon: React.ReactNode; // You can use SVGs or components for icons
    href: string;
  }
  
  export interface SidebarProps {
    items: SidebarItem[];
  }

const Example = () => {
    const sidebarItems: SidebarItem[] = [
        { label: 'Home', icon: <HomeIcon className="h-5 w-5" />, href: '/' },
        { label: 'Profile', icon: <UserIcon className="h-5 w-5" />, href: '/profile' },
        { label: 'Documents', icon: <DocumentIcon className="h-5 w-5" />, href: '/documents' },
        // Add more sidebar items as needed
      ];
  return (
    <>
     {/* Sidebar */}
     <Sidebar items={sidebarItems} />

{/* Main content */}
<div className="flex-1 bg-gray-200 p-5">
  <h1 className="text-2xl font-bold">Main Content Area</h1>
  <p>This is where your main content goes.</p>
</div>
    </>
  )
};

export default Example;

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
    return (
      <div className="flex h-screen bg-gray-800">
        <div className="w-64 md:w-20 bg-gray-800">
          <div className="flex flex-col items-center justify-center h-full">
            {/* Sidebar content */}
            <ul className="space-y-4">
              {items.map((item, index) => (
                <li key={index} className="my-2">
                  <a
                    href={item.href}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md flex items-center"
                  >
                    {item.icon}
                    <span className="ml-2">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };


