"use client"
import React, { useState, useEffect } from 'react';

const Example = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
          setTime(new Date());
        }, 1000);
    
        return () => clearInterval(interval);
      }, []);

      const digitalTime = time.toLocaleTimeString();

      const hours = time.getHours() % 12;
      const minutes = time.getMinutes();
      const seconds = time.getSeconds();
    
      const hoursAngle = (hours + minutes / 60) * 30;
      const minutesAngle = (minutes + seconds / 60) * 6;
      const secondsAngle = seconds * 6;


  return (
    <>
     <div className="flex flex-col items-center">
      <div className="text-2xl font-bold mb-4">{digitalTime}</div>
      <div className="relative w-64 h-64 flex items-center justify-center">
        <div className="absolute w-full h-full rounded-full border-4 border-gray-300"></div>
        <div
          className="absolute w-2/3 h-1 bg-black origin-bottom"
          style={{ transform: `rotate(${hoursAngle}deg)` }}
        ></div>
        <div
          className="absolute w-3/4 h-1 bg-black origin-bottom"
          style={{ transform: `rotate(${minutesAngle}deg)` }}
        ></div>
        <div
          className="absolute w-4/5 h-1 bg-red-500 origin-bottom"
          style={{ transform: `rotate(${secondsAngle}deg)` }}
        ></div>
      </div>
    </div>
    </>
  )
}

export default Example