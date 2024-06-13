"use client"
import React, { useState } from 'react'

const CustomApp:React.FC<> = ({}) => {
   const base:number = 5;
   const exponent:number = 10;
   const result = base ** exponent
  return (
    <>
     <h2>Addition Example</h2>
      <p>base: {base}</p>
      <p>exponent: {exponent}</p>
      <p>Result:       {result}</p>
    </> 
  )
}

export default CustomApp