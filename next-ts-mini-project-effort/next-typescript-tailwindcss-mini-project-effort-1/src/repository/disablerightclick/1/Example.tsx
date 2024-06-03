"use client";
import React, { useEffect,useState } from "react";


const Example: React.FC<> = ({}) => {

       const handleContextMenu = (event:React.MouseEvent<HTMLDivElement,MouseEvent>) => {
        event?.preventDefault();
       }
  return (
    <>
     <div className="w-full h-full" onContextMenu={handleContextMenu}>
      {/* Content */}
      <p>Velit enim anim non ad esse labore voluptate.</p>
    </div>
    </>
  );
};

export default Example;
