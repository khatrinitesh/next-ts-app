"use client";
import React, { useState } from "react";
import Example from "./Example";

const CustomApp = () => {

    const [filter, setFilter] = useState<string | null>(null);

    const handleFilterSelect = (option: string) => {
      setFilter(option);
    };
  
    
  return (  
    <>
   <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8">Filter Dropdown Example</h1>
      <Example
        options={['Option 1', 'Option 2', 'Option 3']}
        onSelect={handleFilterSelect}
      />
      {filter && <p className="mt-4">Selected Filter: {filter}</p>}
    </div>
    </>
  );
};

export default CustomApp;
