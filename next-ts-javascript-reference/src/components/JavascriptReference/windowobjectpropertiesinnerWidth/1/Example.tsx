"use client"
import React, { useState, useEffect, useRef } from 'react';

const Example = () => {
   
  return (
    <>
    <MyComponent/>
    </>
  )
}

export default Example

const MyComponent:React.FC = () => {
   
    const [innerHeight,setInnerHeight] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setInnerHeight(window.innerWidth)
        };

        window.addEventListener('resize',handleResize);

        return () => {
            window.removeEventListener('resize',handleResize);
        };
    },[]);
    return(
        <>
            <h1>Window Inner Height: {innerHeight}</h1>
            <p>Resize the window to see the updated inner height.</p>
        </>
    )
}

