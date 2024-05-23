"use client"
import React, { useEffect } from 'react'

interface BtnProps{
    label:string;
    onClick:() => void;
}

const Example: React.FC<BtnProps> = ({label,onClick}) => {
   
    return (
      <>
        <button
      className="block w-full px-4 py-2 my-2 text-white bg-blue-500 rounded hover:bg-blue-700"
      onClick={onClick}
    >
      {label}
    </button>
      </>
    );
  };

export default Example