"use client";
import React, { useEffect } from "react";
import Example from "./Example";

const CustomApp = () => {
    
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <h1 className="text-2xl font-bold">Breadcrumb Example</h1>
        <Example title="OpenAI Blog"
        url="https://openai.com/blog"
        width={800}
        height={600} />
    </div>
  );
};

export default CustomApp;
