"use client"
import React, { useState } from 'react'

const CustomApp:React.FC<> = ({}) => {
    // define a variable
    let number: number = 5;

    // perform pre-increment using the ++ operator
    --number;
  return (
    <>
      <h2>Pre-increment Example</h2>
      <p>Initial Value: 5</p>
      <p>After Pre-increment: {number}</p>
    </> 
  )
}

export default CustomApp