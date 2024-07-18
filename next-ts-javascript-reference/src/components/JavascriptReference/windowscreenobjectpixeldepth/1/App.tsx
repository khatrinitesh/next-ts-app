"use client"
import React, { useState ,useEffect } from 'react';


const CustomApp:React.FC = () => {
    // State to hold the screen color depth
   const [pixelDepth,setsetpixelDepth] = useState<number>(window.screen.pixelDepth)

  useEffect(() => {
    const updatepixelDepth = () => {
        setsetpixelDepth(window.screen.pixelDepth);
    }
    updatepixelDepth();

    window.addEventListener('resize',updatepixelDepth);
    return () => {
        window.removeEventListener('resize',updatepixelDepth)
    };
  },[]);
  return (
    <>
        <p>Screen pixel Depth: {pixelDepth} bits</p>
    </>
  )
}

export default CustomApp