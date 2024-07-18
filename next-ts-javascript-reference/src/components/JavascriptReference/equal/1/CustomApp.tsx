"use client"
import React, { useState } from 'react'

const CustomApp:React.FC<> = ({}) => {
    // define variables
    let number:number = 5;
    let sum:number= 0;

    // basic assignment operators
    const newValue = number = 10;
    number = newValue;

    // compound assignment operators
    sum += 5;
  return (
    <>
     <h2>Assignment Operators Example</h2>
      <p>Number: {number}</p>
      <p>Sum: {sum}</p>
    </> 
  )
}

export default CustomApp