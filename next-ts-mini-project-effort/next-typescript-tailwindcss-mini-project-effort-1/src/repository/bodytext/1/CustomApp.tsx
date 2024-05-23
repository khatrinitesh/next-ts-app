"use client";
import React, { useEffect } from "react";
import Example from "./Example";

const CustomApp = () => {
    
    useEffect(() => {
        // Add your logic here to get body class and add a class to it
        const bodyClassList= document.body.classList
    
        // Add a class to the body
        bodyClassList.add('custom_body_text');
    
        // You can also check if a class exists before adding it
        // if (!bodyClassList.contains('my-custom-class')) {
        //   bodyClassList.add('my-custom-class');
        // }
    
        // Cleanup function to remove the class when the component unmounts
        return () => {
            bodyClassList.remove('custom_body_text')
        }
      }, []); // Empty dependency array ensures the effect runs only once after initial render

  return (
    <div>
      Body text
    </div>
  );
};

export default CustomApp;
