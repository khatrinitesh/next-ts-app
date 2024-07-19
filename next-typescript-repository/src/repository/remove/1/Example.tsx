"use client";
// custom hooks - state management
import React, { useState, useEffect, useRef } from "react";
// library
// next image
import Image from "next/image";
// interface

// constants

const Example = () => {
  return (
    <>
    <RemoveComponent/>
    </>
  );
};

export default Example;

const RemoveComponent: React.FC<> = ({}) => {
    const [data,setData] = useState('test')

    const handleDel = () => {
        setData('')
    }
  return (
    <>
     {data}
     <button onClick={handleDel} className="bg-sky-800 text-white px-5 p-2 rounded">Remove</button>
    </>
  )
};
