"use client"
import React, { useState } from 'react'

const CustomApp:React.FC<> = ({}) => {
      // Define state variable to hold the current value
  const [count, setCount] = useState<number>(0);

  // Function to handle the increment operation
  const handleIncrement = () => {
    // Use the += compound assignment operator to increment the count
    setCount(prevCount => prevCount + 1);
  };
  return (
    <>
    <button onClick={handleIncrement}>++</button>
     {count}
    </> 
  )
}

export default CustomApp