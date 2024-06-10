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
import TextField from '@mui/material/TextField';



const Example: React.FC<> = ({}) => {
  return (
    <>
       <div className="text-black lg:text-red-500">
      This text is black on small screens and red on screens larger than lg.
    </div>
    <div className="p-4 md:p-8 lg:p-12 xl:p-16">
      This div has different padding values based on screen sizes.
    </div>
    </>
  );
};

export default Example;
