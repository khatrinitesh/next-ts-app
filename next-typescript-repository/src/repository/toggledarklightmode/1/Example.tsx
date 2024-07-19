"use client";
// custom hooks - state management
import React, {createContext, useContext, useState, useEffect, useRef } from "react";

// NEXT/IMAGE
import Image from "next/image";
// NEXT/LINK
import Link from "next/link";
// WALLPAPER
import Wallpaper from "../../../assets/img/wallpaper.jpg";
// STYLINGCSS
import "./style.css";
// INTERFACE

// CONSTANTS

const Example = () => {
  return (
    <>
     <Toggle/>
    </>
  );
}; 

export default Example;

const Toggle:React.FC = () => {
    const [ darkMode, setDarkMode ] = React.useState(false)
   
    useEffect(() => {
      const body = document.body
      const toggle = document.querySelector('.toggle-inner')
      
      // If dark mode is enabled - adds classes to update dark-mode styling.
      // Else, removes and styling is as normal.
      if( darkMode === true ) {
        body.classList.add('dark-mode')
        toggle.classList.add('toggle-active')
      } else {
        body.classList.remove('dark-mode')
        toggle.classList.remove('toggle-active')
      }
    }, [darkMode])

    return(
        <>
        <div
        id="toggle"
        onClick={() => darkMode === false ? setDarkMode(true) : setDarkMode(false)}
      >
        <div className="toggle-inner"/>
      </div>
        </>
    )
}