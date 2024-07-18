"use client"
import React, { useRef, useEffect, useState } from 'react';

const Example = () => {
    const [scrollX, setScrollX] = useState<number>(0);
    const [scrollY, setScrollY] = useState<number>(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollX(window.pageXOffset);
            setScrollY(window.pageYOffset);
        };

        // Add event listener when component mounts
        window.addEventListener('scroll', handleScroll);

        // Clean up event listener when component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
  return (
    <>
        <div style={{ height: '200vh',width:'1000vw' }}>
            <p>Scroll horizontally: {scrollX}px</p>
            <p>Scroll vertically: {scrollY}px</p>
        </div>
    </>
  )
}

export default Example