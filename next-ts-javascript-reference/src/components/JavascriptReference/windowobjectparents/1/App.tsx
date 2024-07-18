"use client"
import React, { useEffect } from 'react';

interface Window {
    myCustomProperty?:string; // custom property
}

const CustomApp:React.FC = () => {
    useEffect(() => {
        // Assigning a custom property to the window object
        window.myCustomProperty = 'Hello, world!';
    
        // Accessing the custom property from the window object
        console.log(window.myCustomProperty);
      }, []);
    
  return (
    <>
     Check the console for custom window properties.
    </>
  )
}

export default CustomApp