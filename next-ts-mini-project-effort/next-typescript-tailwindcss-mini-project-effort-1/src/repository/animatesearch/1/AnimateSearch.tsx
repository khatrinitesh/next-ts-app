"use client"
import React, { useRef, useState } from 'react'



const AnimateIcons:React.FC<> = () => {

  const [isFocused,setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

const handleFocus = () => {
    setIsFocused(true);
}

const handleBlur = () => {
    if(inputRef.current && inputRef.current.value === ''){
        setIsFocused(false);
    }
}
  return (
    <>
     <div className="relative w-full max-w-xs">
      <input
        ref={inputRef}
        type="text"
        className={`transition-all duration-300 ease-in-out ${isFocused ? 'w-full' : 'w-16'} px-10 py-2 rounded-md bg-gray-200 focus:outline-none`}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={isFocused ? '' : 'Search...'}
      />
      <svg
        className="absolute top-1/2 transform -translate-y-1/2 left-2 h-5 w-5 text-gray-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
      </svg>
    </div>
    </>
  )
}

export default AnimateIcons