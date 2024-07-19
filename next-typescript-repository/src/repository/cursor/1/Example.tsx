
"use client"
import React, { useEffect,useState } from "react";



const Example: React.FC = () => {
    const [cursorStyle, setCursorStyle] = useState('default');

    const handleMouseEnter = (style: string) => {
      setCursorStyle(style);
    };
  
    const handleMouseLeave = () => {
      setCursorStyle('default');
    };
  
  return (
    <>
    <div className={`cursor-${cursorStyle} h-screen flex flex-col justify-center items-center`}>
      <div
        className="p-4 m-2 bg-blue-500 text-white rounded cursor-pointer"
        onMouseEnter={() => handleMouseEnter('pointer')}
        onMouseLeave={handleMouseLeave}
      >
        Hover me (Pointer)
      </div>
      <div
        className="p-4 m-2 bg-green-500 text-white rounded cursor-move"
        onMouseEnter={() => handleMouseEnter('move')}
        onMouseLeave={handleMouseLeave}
      >
        Hover me (Move)
      </div>
      <div
        className="p-4 m-2 bg-red-500 text-white rounded cursor-wait"
        onMouseEnter={() => handleMouseEnter('wait')}
        onMouseLeave={handleMouseLeave}
      >
        Hover me (Wait)
      </div>
      <div
        className="p-4 m-2 bg-red-500 text-white rounded cursor-wait"
        onMouseEnter={() => handleMouseEnter('crosshair')}
        onMouseLeave={handleMouseLeave}
      >
        Hover me (crosshair)
      </div>
      <div
        className="p-4 m-2 bg-red-500 text-white rounded cursor-wait"
        onMouseEnter={() => handleMouseEnter('progress')}
        onMouseLeave={handleMouseLeave}
      >
        Hover me (progress)
      </div>
    </div>
    </>
  );
};

export default Example;
