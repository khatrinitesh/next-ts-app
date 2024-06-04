"use client";
import React, { useState } from "react";
import Example from "./Example";
import { FaCog, FaRocket, FaShieldAlt } from 'react-icons/fa';

const CustomApp = () => {
    
  return (  
    <>
     <div className="min-h-screen flex flex-col items-center justify-center space-y-8 p-4">
      <h1 className="text-4xl font-bold">Our Features</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Example
          title="Easy Configuration"
          description="Set up your application with ease using our intuitive configuration."
          icon={<FaCog size={40} />}
        />
        <Example
          title="Fast Performance"
          description="Experience blazing fast performance with our optimized solutions."
          icon={<FaRocket size={40} />}
        />
        <Example
          title="Secure"
          description="Your security is our top priority. We ensure your data is safe."
          icon={<FaShieldAlt size={40} />}
        />
      </div>
    </div>
    </>
  );
};

export default CustomApp;
