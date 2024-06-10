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
import Spinner from "./Spinner";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ReactMarkdown from 'react-markdown';
import MarkdownEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';


type MenuItem = {
    label: string;
    subMenu?: MenuItem[];
  };


  const menuItems: MenuItem[] = [
    {
      label: 'Home',
    },
    {
      label: 'About',
      subMenu: [
        { label: 'Company' },
        { label: 'Team' },
        { label: 'History' },
      ],
    },
    {
      label: 'Services',
      subMenu: [
        { label: 'Web Design' },
        { label: 'Graphic Design' },
        { label: 'SEO' },
      ],
    },
    {
      label: 'Contact',
    },
  ];

const Example: React.FC<{}> = ({}) => {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    const handleMouseEnter = (label: string) => {
      setHoveredItem(label);
    };
  
    const handleMouseLeave = () => {
      setHoveredItem(null);
    };
  return (
    <>
       <div className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <nav className="flex">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="relative mr-4"
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="#"
                className="hover:bg-gray-700 px-3 py-2 rounded-md"
              >
                {item.label}
              </a>
              {item.subMenu && hoveredItem === item.label && (
                <div className="absolute mt-2 bg-gray-800 rounded-md p-4">
                  {item.subMenu.map((subItem, subIndex) => (
                    <a key={subIndex} href="#" className="block py-2">
                      {subItem.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
    </>
  );
};

export default Example;
