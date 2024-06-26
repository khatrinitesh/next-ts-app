"use client";
import { useState, useEffect } from "react";
// LIBRARY
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
// INTERFACE
import { SocialMediaPlatform } from "./interface";
// STYLING
// import './style.css';

const Example: React.FC = () => {

  return (
    <>
    <ShowHideDivCheckboxComponent/>
    </>
  );
};

export default Example;

const ShowHideDivCheckboxComponent:React.FC =  () => {
    const [toggle,setToggle] = useState(false);
    const handleToggle =() => {
        setToggle(!toggle);
    }
    return(
        <>
        <input type="checkbox" onClick={handleToggle} />
        {toggle && (<><div className="border-red-400 p-2 border-[10px] w-[200px] h-[200px] flex items-center  text-center justify-center">Reprehenderit reprehenderit ad adipisicing nisi eu duis non elit.</div></>)}
        </>
    )
}