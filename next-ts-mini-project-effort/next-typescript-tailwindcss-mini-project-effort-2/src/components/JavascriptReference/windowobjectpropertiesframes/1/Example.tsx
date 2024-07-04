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
   
    const iframeRef = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        const iframe = iframeRef.current;

        if (iframe) {
            iframe.src = 'https://www.w3schools.com/jsref/';
          } else {
            console.warn('iframeRef.current is null or undefined');
          }
    })
    
    return(
        <>
            <h1>Manipulating iframe Location in React</h1>
            <iframe src={iframeRef} title="External Content" width="600" height="400" ></iframe>
        </>
    )
}

