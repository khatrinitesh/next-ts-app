"use client"
import React, { useState ,useEffect } from 'react';

interface Window{
    scrollX:number;
    scrollY:number;
}

const CustomApp:React.FC = () => {

    const [scrollPosition,setScrollPosition] = useState<({x:number | undefined;y:number | undefined})>({
        x:window.scrollX,
        y:window.scrollY
    }); 

    useEffect(() => {
        window.scrollX = 150;
        window.scrollY = 300;
        setScrollPosition({
            x:window.scrollX,
            y:window.scrollY
        });
        const handleScroll = () => {
            setScrollPosition({
                x:window.scrollX,
                y:window.scrollY
            });
        }

        window.addEventListener('scroll',handleScroll);

    return () => {
        window.removeEventListener('scroll',handleScroll)
    }
    },[]);

    
    

  return (
    <>
        <h1>Scroll Position</h1>
        <p>Scrollx: {scrollPosition.x ?? 'not set'}</p>
        <p>Scrolly: {scrollPosition.y ?? 'not set'}</p>
    </>
  )
}

export default CustomApp