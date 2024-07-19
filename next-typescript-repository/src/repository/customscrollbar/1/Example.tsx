
"use client"
import React, { useRef ,useEffect,useState } from "react";


const Example: React.FC<> = ({}) => {
   
  return (
    <>
    <div className="h-64 w-full overflow-y-scroll bg-gray-800 p-4 text-white">
      <p className="mb-2">Content with custom scrollbar:</p>
      <div className="h-96">
        {Array.from({ length: 50 }, (_, i) => (
          <p key={i} className="p-2">
            Item {i + 1}
          </p>
        ))}
      </div>
    </div>
    </>
  );
};

export default Example;
