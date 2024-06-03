
"use client"
import React, { useState } from "react";

interface ColorPickerProps  {
  colors: string[];
  onSelect:(color:strng) => void;
}

const Example: React.FC<ColorPickerProps> = ({colors,onSelect}) => {
  const [selectedColor, setSelectedColor] = useState<string>(colors[0]);

  const handleColorChange  = (color:string) => {
    setSelectedColor(color);
    onSelect(color)
  };
  return (
    <>
      <div className="flex items-center">
      {colors.map((color, index) => (
        <div
          key={index}
          className={`w-8 h-8 rounded-full cursor-pointer mx-1 ${
            selectedColor === color ? 'border-2 border-black' : ''
          }`}
          style={{ backgroundColor: color }}
          onClick={() => handleColorChange(color)}
        ></div>
      ))}
    </div>
    </>
  );
};

export default Example;
