"use client"
import React,{useState,useEffect  } from "react";
import Image from "next/image";

const Example = () => {
    const handleClick = () => {
        alert('text');
        
    }
  return (
    <>
      <PillBtn text="text" onClick={handleClick} />
    </>
  );
};

export default Example;

interface PillBtnProps{
    text:string;
    onClick:() => void;
    className?:string;
}

const PillBtn:React.FC<PillBtnProps> =({text,onClick,className=""}) => {
    return(
        <>
 <button
      className={`px-6 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 focus:outline-none ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
        </>
    )
}
