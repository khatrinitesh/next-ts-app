"use client"
import React, { useState ,useEffect } from 'react';

interface Window{
    screenLeft:number;
    screenTop:number;
}

const CustomApp:React.FC = () => {

    const [screenPosition,setScreenPosition] = useState<{left:number | undefined; right:number | undefined}>({
        left:window.screenLeft,
        top:window.screenTop
    });

    useEffect(() => {
        window.screenLeft = 100;
        window.screenTop = 500;

        setScreenPosition({
            left:window.screenLeft,
            top:window.screenTop
        });
    },[]);

  return (
    <>
        <h1>Screen Position</h1>
        <p>Screen Left: {screenPosition.left ?? 'Not set'}</p>
        <p>Screen Top: {screenPosition.top ?? 'Not set'}</p>
    </>
  )
}

export default CustomApp