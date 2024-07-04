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
        // Accessing navigator properties after component mounts
        console.log('User Agent:', window.navigator.userAgent);
        console.log('Platform:', window.navigator.platform);
      }, []);
    
    return(
        <>
          
      <ul>
        <li>
        <strong>User Agent:</strong> {window.navigator.userAgent}
        </li>
        <li>
        <strong>Platform:</strong>
        {window.navigator.platform}
        </li>
        <li><strong>Language:</strong> {window.navigator.language}</li>
        <li><strong>Cookies Enabled:</strong> {window.navigator.cookieEnabled ? 'Yes' : 'No'}</li>
        <li><strong>Online Status:</strong> {window.navigator.onLine ? 'Online' : 'Offline'}</li>
      </ul>
        </>
    )
}

