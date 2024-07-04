"use client"
import React, { useState, useEffect } from 'react';

const Example = () => {
  return (
    <>
    <MyComponent/>
    </>
  )
}

export default Example

const MyComponent:React.FC = () => {
    const [isWindowClosed, setIsWindowClosed] = useState(false);

    useEffect(() => {
        const myWindow = window.open('https://www.w3schools.com/jsref/obj_window.asp', '_blank');
    
        const checkWindowStatus = () => {
          if (myWindow.closed) {
            setIsWindowClosed(true);
          } else {
            setTimeout(checkWindowStatus, 1000); // Check every second
          }
        };
    
        // Start checking window status after it's opened
        checkWindowStatus();
    
        // Clean up when component unmounts
        return () => {
          myWindow.close(); // Close the window when component unmounts
        };
      }, []);
    return(
        <>
        {isWindowClosed ? (
        <p>The window is closed.</p>
      ) : (
        <p>Waiting for the window to close...</p>
      )}
        </>
    )
}

