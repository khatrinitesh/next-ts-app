"use client";
import React, { useEffect, useState } from "react";
import Link from 'next/link';

const Example: React.FC<> = ({}) => {

    const [isVisible, setIsVisible] = useState(false);
  const [isFading, setIsFading] = useState(false);

  const handleToggle = () => {
    if (isVisible) {
      setIsFading(true);
      setTimeout(() => {
        setIsFading(false);
        setIsVisible(false);
      }, 1000); // Match this duration with your fadeOut animation
    } else {
      setIsVisible(true);
    }
  };
  
  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen">
      <button
        onClick={handleToggle}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Toggle Fade
      </button>
      {isVisible && (
        <div className={`${isFading ? 'animate-fadeOut' : 'animate-fadeIn'}`}>
          <h1 className="text-2xl font-bold">Hello, World!</h1>
          <p>This content will fade in and out.</p>
        </div>
      )}
    </div>
    </>
  );
};

export default Example;
