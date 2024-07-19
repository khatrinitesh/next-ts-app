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
import { UserData } from './interface';
// constants
import { userdata } from "./constants";


export interface SidebarItem {
    label: string;
    icon: React.ReactNode; // You can use SVGs or components for icons
    href: string;
  }
  
  export interface SidebarProps {
    items: SidebarItem[];
  }

const Example = () => {
   
  return (
    <>
    <ResponsiveTables data={userdata}/>
    </>
  )
};

export default Example;

interface TableProps{
    data:UserData[];
}

const ResponsiveTables: React.FC<TableProps> = ({ data }) => {
    return (
      <>
         <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-200">
            <th className="text-left py-2 px-4">ID</th>
            <th className="text-left py-2 px-4">Name</th>
            <th className="text-left py-2 px-4">Email</th>
            <th className="text-left py-2 px-4">Role</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id} className="border-b">
              <td className="text-left py-2 px-4">{user.id}</td>
              <td className="text-left py-2 px-4">{user.name}</td>
              <td className="text-left py-2 px-4">{user.email}</td>
              <td className="text-left py-2 px-4">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      </>
    );
  };


