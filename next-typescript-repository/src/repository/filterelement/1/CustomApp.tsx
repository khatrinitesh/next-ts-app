"use client";
import React, { useState } from "react";
import Example from "./Example";

const CustomApp = () => {
    const [filter, setFilter] = useState<string>('');

    const handleFilterChange = (newFilter: string) => {
      setFilter(newFilter);
      // Implement filter logic here
      console.log('Selected filter:', newFilter);
    };
  
    
  return (  
    <>
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Filter Elements</h1>
        <Example onFilterChange={handleFilterChange} />
        <div className="mt-4">
          {/* Render your filtered elements here */}
          <p>Current filter: {filter}</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default CustomApp;
