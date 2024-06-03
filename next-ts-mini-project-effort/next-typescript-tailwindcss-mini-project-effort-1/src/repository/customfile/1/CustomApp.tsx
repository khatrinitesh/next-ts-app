"use client"
import React, { useState } from "react";
import Example from "./Example";


const CustomApp = () => {
    const handleFileSelect = (file: File | null) => {
        if (file) {
          console.log('Selected file:', file.name);
        } else {
          console.log('No file selected');
        }
      };

  return (
    <div className="flex justify-center items-center h-screen">
      <Example label="Upload your file:" onFileSelect={handleFileSelect} />
    </div>
  );
};

export default CustomApp;
