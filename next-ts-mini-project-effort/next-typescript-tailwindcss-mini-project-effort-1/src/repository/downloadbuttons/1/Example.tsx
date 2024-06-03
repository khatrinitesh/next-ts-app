"use client";
import React, { useEffect,useState } from "react";

interface DownloadProps{
    label:string;
    onClick:() => void;
    className:string;
}

const Example: React.FC<DownloadProps> = ({label,onClick,className}) => {

  return (
    <>
    <button onClick={onClick} className={`${className ? 'active' : ''}`}>{label}</button>  
    </>
  );
};

export default Example;
