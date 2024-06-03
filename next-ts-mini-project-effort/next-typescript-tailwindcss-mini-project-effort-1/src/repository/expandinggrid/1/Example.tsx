"use client";
import React, { useEffect, useState } from "react";
import Link from 'next/link';

interface GridProps {
    items: string[];
  }
  

const Example: React.FC<GridProps> = ({items}) => {
  
  return (
    <>
     <div className="grid grid-cols-3 gap-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-blue-300 p-4 flex items-center justify-center cursor-pointer hover:bg-blue-500 transition duration-300"
        >
          {item}
        </div>
      ))}
    </div>
    </>
  );
};

export default Example;
