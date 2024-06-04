"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Example: React.FC<> = ({}) => {
  const [isButton1Visible, setButton1Visible] = useState(true);
  const [isButton2Visible, setButton2Visible] = useState(true);

  const toggleButton1 = () => {
    setButton1Visible(!isButton1Visible);
  };

  const toggleButton2 = () => {
    setButton2Visible(!isButton2Visible);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <button
        onClick={toggleButton1}
        className={`px-4 py-2 rounded bg-blue-500 text-white transition-opacity duration-500 ${
          isButton1Visible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        Button 1
      </button>
      <button
        onClick={toggleButton2}
        className={`px-4 py-2 rounded bg-green-500 text-white transition-opacity duration-500 ${
          isButton2Visible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        Button 2
      </button>
      <button
        onClick={toggleButton1}
        className="px-4 py-2 rounded bg-red-500 text-white"
      >
        Toggle Button 1
      </button>
      <button
        onClick={toggleButton2}
        className="px-4 py-2 rounded bg-yellow-500 text-white"
      >
        Toggle Button 2
      </button>
    </div>
    </>
  );
};

export default Example;
