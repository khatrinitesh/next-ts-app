"use client"
import React, { useState ,useEffect } from 'react';


const CustomApp:React.FC = () => {
    // State to hold the screen color depth
   const [colorDepth,setsetColorDepth] = useState<number>(window.screen.colorDepth)

  useEffect(() => {
    const updateColorDepth = () => {
        setsetColorDepth(window.screen.colorDepth);
    }
    updateColorDepth();

    window.addEventListener('resize',updateColorDepth);
    return () => {
        window.removeEventListener('resize',updateColorDepth)
    };
  },[]);
  return (
    <>
        <p>Screen Color Depth: {colorDepth} bits</p>
    </>
  )
}

export default CustomApp