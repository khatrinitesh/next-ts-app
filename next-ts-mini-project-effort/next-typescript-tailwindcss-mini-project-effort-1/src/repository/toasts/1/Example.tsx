"use client";
// custom hooks - state management
import React, { useState, useEffect, useRef } from "react";

// NEXT/IMAGE
import Image from "next/image";
// NEXT/LINK
import Link from "next/link";
// WALLPAPER
import Wallpaper from "../../../assets/img/wallpaper.jpg";
// STYLINGCSS
// import "./style.css";
// INTERFACE
import { Toast as ToastType } from "./interface";
// CONSTANTS
import { TOASTS } from "./constants";


const Example = () => {
   

  return (
    <>
       <div className="toast-container fixed top-4 right-4 z-50">
            {TOASTS.map(toast => (
                <Toast key={toast.id} toast={toast} />
            ))}
        </div>
    </>
  );
};

export default Example;

const Toast:React.FC<{toast:ToastType}> = ({toast}) => {

    const toastClasses = {
        'success': 'bg-green-500',
        'error': 'bg-red-500',
        'warning': 'bg-yellow-500',
        'info': 'bg-blue-500',
    };
    return(
        <>
         <div className={`toast ${toastClasses[toast.type]} text-white px-4 py-2 rounded-md shadow-md mb-2`}>
            {toast.message}
        </div>
        </>
    )
}
