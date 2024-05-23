"use client"
import React, {  useState } from 'react'

interface ArrowProps{
  direction:'left' | 'right';
  className?:string;
}

const Arrows:React.FC<ArrowProps> = ({direction,className}) => {


  return (
    <>
      <svg
      className={`w-6 h-6 ${className}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      {direction === 'left' ? (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      ) : (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      )}
    </svg>
    </>
  )
}

export default Arrows