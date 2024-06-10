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


const Example: React.FC<> = ({}) => {

    const [isGridView,setIsGridView] = useState(true);

    const items = [
        { id: 1, name: 'Item 1', description: 'This is item 1' },
        { id: 2, name: 'Item 2', description: 'This is item 2' },
        { id: 3, name: 'Item 3', description: 'This is item 3' },
        // Add more items as needed
    ]

   
  return (
    <>
     <div className="container mx-auto p-4">
      <div className="flex justify-end mb-4">
        <button
          className={`mr-2 ${isGridView ? 'bg-blue-500' : 'bg-gray-300'} p-2 rounded`}
          onClick={() => setIsGridView(true)}
        >
          Grid View
        </button>
        <button
          className={`${!isGridView ? 'bg-blue-500' : 'bg-gray-300'} p-2 rounded`}
          onClick={() => setIsGridView(false)}
        >
          List View
        </button>
      </div>
      <div className={isGridView ? 'grid grid-cols-3 gap-4' : 'list-none'}>
        {items.map(item => (
          <div
            key={item.id}
            className={`border p-4 rounded ${isGridView ? 'col-span-1' : 'mb-4'}`}
          >
            <h2 className="font-bold text-lg">{item.name}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Example;
