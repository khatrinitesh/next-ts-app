'use client'
import React, { useState } from 'react'

interface ColorOption {
    name: string;
    value: string;
  }

  
const colorOptions:ColorOption[] = [
    { name: 'Red', value: 'bg-red-500' },
  { name: 'Green', value: 'bg-green-500' },
  { name: 'Blue', value: 'bg-blue-500' },
  { name: 'Yellow', value: 'bg-yellow-500' },
]

const Example:React.FC = () => {

    const [bgColor, setBgColor] = useState<string>('bg-white-500');

  const handleColorChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
    setBgColor(event.target.value);
  };

  return (
    <>
     <div className={`min-h-screen flex items-center justify-center ${bgColor}`}>
      <div className="p-4 rounded shadow-lg bg-white">
        <h1 className="text-xl mb-4">Select Background Color</h1>
        <select
          className="p-2 border rounded"
          onChange={handleColorChange}
        >
          {colorOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
    </div>
    </>
  )
}

export default Example
