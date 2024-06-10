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


const Example: React.FC<{}> = ({}) => {
  const [open,setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  }

  const handleCloseModal = () => {
    setOpen(false);
  }
  return (
    <>
     
     {!open && (
        <>
        <button className="bg-blue-500 text-white px-3 py-1 rounded" onClick={handleOpenModal}>Open</button>
        </>
     )}

     {open && (
        <div onClick={handleCloseModal} className="fixed inset-0 w-full h-full bg-[rgba(0,0,0,.5)] flex items-center justify-center">
            <button className="bg-blue-500 text-white px-3 py-1 rounded" onClick={handleCloseModal}>&times;</button>
            <div className="bg-white p-6 rounded" onClick={handleOpenModal}>
            <h2 className="text-black font-bold text-[32px]">Modal boxes</h2>
            </div>
        </div>
     )}
    </>
  );
};

export default Example;
