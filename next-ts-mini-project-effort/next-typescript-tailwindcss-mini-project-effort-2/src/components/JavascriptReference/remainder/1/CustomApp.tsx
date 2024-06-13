"use client"
import React, { useState } from 'react'

const CustomApp:React.FC<> = ({}) => {
   const dividend:number = 10;
   const divisor:number = 5;
   const result = dividend % divisor
  return (
    <>
     <h2>Addition Example</h2>
      <p>dividend: {dividend}</p>
      <p>divisor: {divisor}</p>
      <p>Result:       {result}</p>
    </> 
  )
}

export default CustomApp