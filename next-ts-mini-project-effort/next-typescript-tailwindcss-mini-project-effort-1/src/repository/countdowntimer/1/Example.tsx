
"use client"
import React, { useEffect,useState } from "react";

interface CountdownTimerProps {
    targetDate: string; // Date format: 'YYYY-MM-DDTHH:MM:SS'
}

const Example: React.FC<CountdownTimerProps> = ({targetDate}) => {
    const calculateTimeLeft = () => {
        const difference = new Date(targetDate).getTime() - new Date().getTime();
        let timeLeft: { days: number; hours: number; minutes: number; seconds: number } = {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
    
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((difference % (1000 * 60)) / 1000),
          };
        }
    
        return timeLeft;
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
      useEffect(() => {
        const timer = setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
    
        return () => clearTimeout(timer);
      });
  return (
    <>
      <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Countdown Timer</h2>
        <div className="text-2xl">
          <span className="font-bold">{timeLeft.days}</span> Days {' '}
          <span className="font-bold">{timeLeft.hours}</span> Hours {' '}
          <span className="font-bold">{timeLeft.minutes}</span> Minutes {' '}
          <span className="font-bold">{timeLeft.seconds}</span> Seconds
        </div>
      </div>
    </div>
    </>
  );
};

export default Example;
