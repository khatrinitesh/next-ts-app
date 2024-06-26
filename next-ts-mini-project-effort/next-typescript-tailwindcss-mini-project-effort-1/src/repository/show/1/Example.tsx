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
    <ShowComponent/>
    </>
  );
};

export default Example;

const ShowComponent:React.FC =  () => {
    const [text,setText] = useState(false);
    return(
        <>
        {text ? 'yes' : 'no'}
        </>
    )
}