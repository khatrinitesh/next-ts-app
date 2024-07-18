"use client"
import React, { useState } from 'react'

const CustomApp:React.FC<> = ({}) => {
   const n1:number = 5;
   const n2:number = 10;
   const result = n1 + n2
  return (
    <>
     <h2>Addition Example</h2>
      <p>Number 1: {n1}</p>
      <p>Number 2: {n2}</p>
      <p>Result:       {result}</p>
    </> 
  )
}

export default CustomApp