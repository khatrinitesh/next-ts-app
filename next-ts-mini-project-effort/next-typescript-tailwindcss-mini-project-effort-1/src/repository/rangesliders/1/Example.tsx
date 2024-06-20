"use client"
// custom hooks - state management
import React, { useState ,useEffect,useRef  } from "react";
// library
// next image
import Image from "next/image";
// interface
import { RangeSliderProps } from "./interface";
// constants
import { quotes } from "./constants";


const Example = () => {
    const [sliderValue, setSliderValue] = useState(20);

    const handleSliderChange = (value: number) => {
      setSliderValue(value);
    };
  
   
  return (
    <>
     <RandomSlidersComp min={0} max={100} step={10} value={sliderValue} onChange={handleSliderChange}/>
    </>
  )
};

export default Example;

const RandomSlidersComp:React.FC<RangeSliderProps> = ({min,max,step,value,onChange}) => {
    
   const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    onChange(parseInt(event.target.value));
   }
    return(
        <>
         <div className="flex items-center space-x-4">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        className="range-slider-thumb appearance-none w-full bg-gray-200 h-1 rounded-lg focus:outline-none"
      />
      <span className="text-gray-700">{value}</span>
    </div>
        </>
    )
}