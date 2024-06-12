"use client"
import React, { useState } from 'react'

interface MyComponentProps {
    name:string;
}


const CustomApp:React.FC<MyComponentProps> = ({name}) => {
    const obj: any = {}; // Define an empty object


      // Define properties using Object.defineProperties()
  Object.defineProperties(obj, {
    greeting: {
      value: `Hello, ${name}!`,
      writable: false, // Property value cannot be changed
      enumerable: true, // Property will be enumerable in for...in loops
      configurable: false, // Property attributes cannot be changed
    },
    // You can define more properties here...
  });

  console.log(obj.greeting); // Output: Hello, [name]!

   
  return (
    <>
    {obj.greeting}
    </>
  )
}

export default CustomApp