"use client"
import React, { useState } from 'react'

const CustomApp:React.FC<> = ({}) => {
  // define variables 
  let x = 10;
  let y = 20;

  let result = x /= y;
  return (
    <>
     {result}
    </> 
  )
}

export default CustomApp