"use client"
import React,{useState,useEffect  } from "react";
import Image from "next/image";

const Example = () => {
  return (
    <>
      <PatternLock />
    </>
  );
};

export default Example;

interface PatternLockProps {
    onPatternComplete: (pattern: number[]) => void;
    minPatternLength?: number;
  }

  const PatternLock: React.FC<PatternLockProps> = ({
    onPatternComplete,
    minPatternLength = 3,
  }) => {
    const [pattern, setPattern] = useState<number[]>([]);
    const [isDrawing, setIsDrawing] = useState<boolean>(false);
  
    const handleStartDrawing = () => {
      setPattern([]);
      setIsDrawing(true);
    };
  
    const handleDraw = (num: number) => {
      if (isDrawing) {
        setPattern((prevPattern) => [...prevPattern, num]);
      }
    };
  
    const handleEndDrawing = () => {
      setIsDrawing(false);
      if (pattern.length >= minPatternLength) {
        onPatternComplete(pattern);
      }
    };
  
    useEffect(() => {
      if (!isDrawing && pattern.length > 0) {
        setPattern([]);
      }
    }, [isDrawing, pattern]);
  
    const renderPatternNodes = () => {
      const nodes = [];
      for (let i = 1; i <= 9; i++) {
        const isActive = pattern.includes(i);
        nodes.push(
          <div
            key={i}
            className={`w-12 h-12 rounded-full border-4 border-gray-300 ${
              isActive ? "bg-blue-500 border-blue-500" : ""
            }`}
            onMouseDown={() => handleStartDrawing()}
            onMouseEnter={() => handleDraw(i)}
            onMouseUp={() => handleEndDrawing()}
            onTouchStart={() => handleStartDrawing()}
            onTouchMove={() => handleDraw(i)}
            onTouchEnd={() => handleEndDrawing()}
          ></div>
        );
      }
      return nodes;
    };
  
    return (
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {renderPatternNodes()}
      </div>
    );
  };