"use client";
import React, { useEffect,useState } from "react";





const Example: React.FC<> = ({}) => {

    const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    const { clientX, clientY } = event;
    event.dataTransfer.setData("text/plain", JSON.stringify({ x: clientX - position.x, y: clientY - position.y }));
  };

  const handleDrag = (event: React.DragEvent<HTMLDivElement>) => {
    const { clientX, clientY } = event;
    if (clientX && clientY) {
      const offset = JSON.parse(event.dataTransfer.getData("text/plain"));
      setPosition({ x: clientX - offset.x, y: clientY - offset.y });
    }
  };

  const handleDragEnd = (event: React.DragEvent<HTMLDivElement>) => {
    const { clientX, clientY } = event;
    const offset = JSON.parse(event.dataTransfer.getData("text/plain"));
    setPosition({ x: clientX - offset.x, y: clientY - offset.y });
  };

     
  return (
    <>
     <div
      className="bg-blue-500 text-white p-4 rounded absolute cursor-move"
      style={{ left: position.x, top: position.y }}
      draggable
      onDragStart={handleDragStart}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
    >
      Drag me!
    </div>
    </>
  );
};

export default Example;
