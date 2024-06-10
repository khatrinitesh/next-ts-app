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

const Example: React.FC<> = ({}) => {

    const [markdown, setMarkdown] = useState<string>('');

  const handleEditorChange = ({ text }: { text: string }) => {
    setMarkdown(text);
  };
   
  return (
    <>
     <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 p-4">
        <MarkdownEditor
          value={markdown}
          onChange={handleEditorChange}
          style={{ height: '400px' }}
        />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <ReactMarkdown className="markdown-preview">{markdown}</ReactMarkdown>
      </div>
    </div>
    </>
  );
};

export default Example;
