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
    id: number;
    name: string;
    description: string;
  };
  
  type BulletFreeListProps = {
    items: Item[];
  };
const Example: React.FC<BulletFreeListProps> = ({items}) => {

        const [visibleCount,setVisibleCount] = useState(3);

        const handleLoadMore = () => {
            setVisibleCount(prevCount => prevCount + 3)
        }
   
  return (
    <>
      <div className="container mx-auto p-4">
      <ul className="list-none space-y-4">
        {items.slice(0,visibleCount).map(item => (
          <li key={item.id} className="border p-4 rounded">
            <h3 className="text-lg font-bold">{item.name}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
      {visibleCount < items.length && (
        <button onClick={handleLoadMore} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Load more</button>
      )}
    </div>
    </>
  );
};

export default Example;
