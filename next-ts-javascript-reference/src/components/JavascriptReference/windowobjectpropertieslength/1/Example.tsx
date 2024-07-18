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
   useEffect(() => {
    document.getElementById('demo').innerHTML = String(window.length);
   });

   const iframesData = [
    { key: 1, style: { width: '100%', height: '100px' } },
    { key: 2, style: { width: '100%', height: '100px' } },
    { key: 3, style: { width: '100%', height: '100px' } }
  ];
    return(
        <>
           <h1>Window Object Properties Length</h1>
           <div id="demo"></div>
           {iframesData.map((iframe, index) => (
        <iframe
          key={iframe.key}
          style={iframe.style}
          title={`iframe-${index}`}
          src="about:blank" // Set your desired src here
        ></iframe>
      ))}
        </>
    )
}

