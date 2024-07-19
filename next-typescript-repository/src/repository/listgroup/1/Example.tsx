"use client";
import React, { useRef, ReactNode, useEffect, useState } from "react";
// import './style.css';
import Link from "next/link";
import Image from "next/image";
import Wallpaper from "../../../assets/img/wallpaper.jpg";
import VideoScreen from "../../../assets/video/movie.mp4";
import axios from "axios";
import { FaSearch } from "react-icons/fa"; // Import an icon from react-icons
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // 
import ModalImage from 'react-modal-image';

type Item = {
    id:number;
    name:string;
    desc:string;
    category:string;
}

type GroupedListing = {
    items:Item[];
}
const Example: React.FC<GroupedListing> = ({items}) => {

   // Group items by category
   const groupedItems = items.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, Item[]>);
   
  return (
    <>
      <div className="container mx-auto p-4">
      {Object.keys(groupedItems).map(category => (
        <div key={category} className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{category}</h2>
          <ul className="list-none space-y-4">
            {groupedItems[category].map(item => (
              <li key={item.id} className="border p-4 rounded">
                <h3 className="text-lg font-bold">{item.name}</h3>
                <p>{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    </>
  );
};

export default Example;
