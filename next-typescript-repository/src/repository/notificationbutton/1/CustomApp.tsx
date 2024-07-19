"use client";
import React, { useState } from "react";
import Example from "./Example";



const CustomApp = () => {
    const [notificationCount, setNotificationCount] = useState(0);

    const handleNotificationClick = () => {
      // Reset notification count on click
      setNotificationCount(prev => prev + 1);
      // Add logic to handle notification click
      // For example, navigate to a notifications page
      console.log("Notification button clicked!");
      
    };
 
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
       
        <Example onClick={handleNotificationClick} count={notificationCount}
        />
      </div>
    </>
  );
};

export default CustomApp;
