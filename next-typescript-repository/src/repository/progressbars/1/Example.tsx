"use client"
import React, { useState ,useEffect } from "react";
import Image from "next/image";
// interface
import { ProgressBar as ProgressBarType } from "./interface";
// constants
import { progressBars } from "./constants";

interface ProgressBarProps{
    progress:ProgressBarType;
}

const Example = () => {
  return (
    <>
      <div className="max-w-md mx-auto">
        {progressBars.map((progress) => (
          <ProgressBarComp key={progress.id} progress={progress} />
        ))}
      </div>
    </>
  )
};

export default Example;


const ProgressBarComp: React.FC<ProgressBarProps> = ({ progress }) => {

   
  return (
    <>
     <div className="mb-4">
      <h3 className="text-sm font-medium text-gray-600">{progress.title}</h3>
      <div className="relative pt-1">
        <div className="flex h-2 mb-2 overflow-hidden text-xs bg-gray-200 rounded">
          <div
            style={{ width: `${progress.percentage}%` }}
            className="flex flex-col justify-center bg-blue-500 shadow-none whitespace-nowrap text-white"
          />
        </div>
      </div>
    </div>
    </>
  );
};
