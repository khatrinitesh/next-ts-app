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


type MaterialInputProps = {
    label: string;
    value: string;
    onChange: (value: string) => void;
  };

const Example: React.FC<MaterialInputProps> = ({label,value,onChange}) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
      };
    
   
  return (
    <>
      <TextField
      label={label}
      value={value}
      onChange={handleChange}
      variant="outlined"
      fullWidth
      size="small"
      className="mb-4"
    />
    </>
  );
};

export default Example;
