"use client"
import React, { useState } from "react";
import Example from "./Example";


const CustomApp = () => {

  const [selectedColor, setSelectedColor] = useState<string>('');

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-6">Color Picker Example</h1>
        <p className="mb-4">Selected Color: {selectedColor}</p>
        <Example
          colors={['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF']}
          onSelect={handleColorSelect}
        />
      </div>
    </div>
  );
};

export default CustomApp;
