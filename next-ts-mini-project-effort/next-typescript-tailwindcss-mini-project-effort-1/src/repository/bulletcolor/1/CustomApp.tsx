"use client";
import React, { useEffect } from "react";
import Example from "./Example";

const CustomApp = () => {

    const items: ListItem[] = [
        { text: 'Item 1', bulletColor: 'blue-500' },
        { text: 'Item 2', bulletColor: 'red-500' },
        { text: 'Item 3', bulletColor: 'cyan-500' },
        { text: 'Item 4', bulletColor: 'red-500' },
      ];
    
    
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <h1 className="text-2xl mb-4">List with Bullet Color Example</h1>
      <Example items={items} />

    </div>
  );
};

export default CustomApp;
