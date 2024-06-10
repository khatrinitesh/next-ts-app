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
import {TeamMember as TeamMemberType } from "./TeamMembers";



const Example: React.FC<{member:TeamMemberType}> = ({member}) => {
  return (
    <>
      <div className="p-4 md:w-1/2 lg:w-1/3">
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <img className="w-full h-64 object-cover object-center" src={member.imageUrl} alt={member.name} />
        <div className="p-4">
          <h2 className="text-lg font-bold">{member.name}</h2>
          <p className="text-sm text-gray-600">{member.role}</p>
          <p className="mt-2">{member.bio}</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Example;
