"use client";
import React, {useRef , ReactNode,useEffect, useState } from "react";
// import './style.css';
import Link from "next/link";
import Image from "next/image";
import Wallpaper from "../../../assets/img/wallpaper.jpg";
import VideoScreen from "../../../assets/video/movie.mp4";


const Example:React.FC<> = ({}) => {

  
  return (
    <>
      
    </>
  );
};

export default Example;

interface CheckboxProps {
    name: string;
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
  }

  const Checkbox: React.FC<CheckboxProps> = ({ name, label, checked, onChange }) => {
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.checked);
    };
  
    return (
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id={name}
          name={name}
          checked={checked}
          onChange={handleChange}
          className="form-checkbox text-blue-500 h-5 w-5"
        />
        <label htmlFor={name} className="text-gray-700">{label}</label>
      </div>
    );
  };