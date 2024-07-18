"use client"
import React, { useState ,useEffect } from 'react';

interface ScreenDimensions {
    availHeight: number;
    availWidth: number;
}

const CustomApp:React.FC = () => {
   const [dimensions,setDimensions] = useState<ScreenDimensions>({
     availHeight:window.screen.availHeight,
     availWidth:window.screen.availWidth
   })

   useEffect(() => {
    const updateDimensions = () => {
        setDimensions({
            availHeight:window.screen.availHeight,
            availWidth:window.screen.availWidth
        });
    };

    updateDimensions();

    window.addEventListener('resize',updateDimensions)

    return () => {
        window.removeEventListener('resize',updateDimensions)
    }   
   },[]);
  return (
    <>
       <p>Available Height: {dimensions.availHeight}px</p>
       <p>Available Width: {dimensions.availWidth}px</p>
    </>
  )
}

export default CustomApp