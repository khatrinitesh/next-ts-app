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
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/"  className="text-white text-xl font-bold">Your Logo
          </Link>
        </div>
        <div className="flex items-center">
          <button
            className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            Login
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-full w-full bg-gray-700 p-4">
          <div className="max-w-md mx-auto bg-white rounded p-4 shadow-md">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500 text-sm">{formik.errors.email}</div>
                ) : null}
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-red-500 text-sm">{formik.errors.password}</div>
                ) : null}
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-500 text-white rounded"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      )}
    </nav>
    </>
  );
};

export default Example;
