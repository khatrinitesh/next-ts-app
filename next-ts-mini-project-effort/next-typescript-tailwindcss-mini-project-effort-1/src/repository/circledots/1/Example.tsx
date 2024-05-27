
"use client"
import React,{useState} from "react";


interface CircleProps{
    count:number;
    size:number;
}

const Example: React.FC<CircleProps> = ({  count,size}) => {

    const circles = Array.from({length:count});
   
  return (
    <>
      <div className="flex space-x-2">
      {circles.map((_, index) => (
        <div
          key={index}
          className="rounded-full bg-blue-500"
          style={{ width: size, height: size }}
        ></div>
      ))}
    </div>
    </>
  );
};

export default Example;
