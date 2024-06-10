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

const Example: React.FC<> = ({}) => {

    const [isOpen, setIsOpen] = useState(false);

    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        validationSchema: Yup.object({
          email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
          password: Yup.string()
            .required('Password is required'),
        }),
        onSubmit: async (values) => {
          console.log('Form submitted:', values);
        },
      });
    
   
  return (
    <>
     <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="mb-4">You can reach us via email at:</p>
        <a
          href="mailto:your-email@example.com"
          className="block py-2 px-4 bg-blue-500 text-white rounded text-center"
        >
          Send Email
        </a>
      </div>
    </div>
    </>
  );
};

export default Example;
