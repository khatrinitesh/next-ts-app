"use client"
import React, { useState ,useEffect } from 'react';


const CustomApp:React.FC = () => {
    const switchToHttps = () => {
        // Redirect to the same path with HTTPS
        if (window.location.protocol !== 'https:') {
          window.location.href = window.location.href.replace(/^http:/, 'https:');
        }
      };
    
      const switchToHttp = () => {
        // Redirect to the same path with HTTP
        if (window.location.protocol !== 'http:') {
          window.location.href = window.location.href.replace(/^https:/, 'http:');
        }
      };
    

  return (
    <>
      <h1>Change Protocol</h1>
      <button onClick={switchToHttps}>Switch to HTTPS</button>
      <button onClick={switchToHttp}>Switch to HTTP</button>
    </>
  )
}

export default CustomApp