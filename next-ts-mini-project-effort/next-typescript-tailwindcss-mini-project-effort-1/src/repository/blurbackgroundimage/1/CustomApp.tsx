"use client";
import React from "react";
import Example from "./Example";

const CustomApp = () => {
 

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Example imageUrl="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg">
        <div className="text-center text-white">
          <h1 className="text-4xl mb-4">Blur Background Example</h1>
          <p className="text-lg">This is an example of a blurred background image using Tailwind CSS and TypeScript in React.</p>
        </div>
      </Example>
      </div>
    </>
  );
};

export default CustomApp;
