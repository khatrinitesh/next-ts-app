"use client"
import React, { useState ,useEffect } from 'react';

interface Window{
    screenX:number;
    screenY:number;
}

const CustomApp:React.FC = () => {

    const [position,setPosition] = useState<{x:number | undefined;y:number | undefined}>({
        x:window.screenX,
        y:window.screenY
    }); 

    useEffect(() => {
        window.screenX = 150;
        window.screenY = 300;
        setPosition({
            x:window.screenX,
            y:window.screenY
        });
    },[]);

  return (
    <>
        <h1>Screen Position</h1>
        <p>Screen X: {position.x ?? 'Not set'}</p>
        <p>Screen Y: {position.y ?? 'Not set'}</p>
    </>
  )
}

export default CustomApp