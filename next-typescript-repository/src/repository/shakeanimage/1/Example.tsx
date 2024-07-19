"use client";
import { useState, useEffect } from "react";
import './style.css';

const Example: React.FC = () => {
    const imageUrl = 'https://via.placeholder.com/300';

  return (
    <>
      <ShakeImageComponent imageUrl={imageUrl}/>
    </>
  );
};

export default Example;

const ShakeImageComponent: React.FC<ShakeImageProps> = ({imageUrl }) => {
    const [isShaking, setIsShaking] = useState(false);

  const startShakeAnimation = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 1000); // Reset shake after 1 second
  };

  return (
    <>
     <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Shake Image</h1>
      <div className={`relative w-48 h-48`}>
        <img src={imageUrl} alt="Shaking Image" className={`w-full h-full object-cover rounded-md ${isShaking ? 'shake' : ''}`} />
      </div>
      <button
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none"
        onClick={startShakeAnimation}
      >
        {isShaking ? 'start' : 'stop'}
      </button>
    </div>
    </>
  );
};
