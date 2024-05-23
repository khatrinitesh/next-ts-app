"use client"
import React from 'react'
import Arrows from './arrows';
import styles from "./Navigation.module.css";

interface NavsProps{
    onPrev:() => void;
    onNxt:() => void;
}

const Navigation:React.FC<NavsProps> = ({onPrev,onNxt}) => {
    
  return (
    <div className="flex justify-between items-center p-4">
    <button
      onClick={onPrev}
      className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none"
    >
      <Arrows direction="left" className="text-gray-600" />
    </button>
    <button
      onClick={onNxt}
      className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none"
    >
      <Arrows direction="right" className="text-gray-600" />
    </button>
  </div>
  )
}

export default Navigation