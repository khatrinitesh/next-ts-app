"use client";
import { useState, useEffect } from "react";
import { Shape } from "./interface";
// import './style.css';

const Example: React.FC = () => {
  const shapes: Shape[] = [
    { id: 1, name: 'Square', dimensions: { width: 32, height: 32 }, color: 'blue-500' },
    { id: 2, name: 'Circle', dimensions: { width: 32, height: 32 }, color: 'green-500' },
    // Add more shapes as needed
  ];

  return (
    <>
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {shapes.map((shape) => (
        <ShapesComponent key={shape.id} shape={shape} />
      ))}
    </div>
    </>
  );
};

export default Example;

const ShapesComponent: React.FC<ShapeProps> = ({ shape}) => {
  
  const { width, height } = shape.dimensions;
  const { color } = shape;

  return (
    <>
      <div
      className={`w-${width} h-${height} bg-${color} rounded-md shadow-md flex items-center justify-center`}
    >
      <span className="text-white text-lg font-bold">{shape.name}</span>
    </div>
    </>
  );
};
