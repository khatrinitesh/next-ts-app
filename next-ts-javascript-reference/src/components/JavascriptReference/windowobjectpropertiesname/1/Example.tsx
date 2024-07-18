"use client"
import React, { useState, useEffect, useRef, FormEvent } from 'react';

const Example = () => {
   
  return (
    <>
    <MyComponent/>
    </>
  )
}

export default Example

const MyComponent:React.FC = () => {
    useEffect(() => {
        // Set window.name when component mounts
        window.name = 'MyWindow';
        
        // Display window.name in console
        console.log('Current window name:', window.name);
      }, []);
    return(
        <>
          <h1>React Window Name Example</h1>
          <p>Check the console to see the current window name.</p>
        </>
    )
}

