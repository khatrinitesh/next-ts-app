"use client"
import React, { useState } from 'react'

const CustomApp = () => {

  const [numbers,setNumbers] = useState<number[]>([1,2,3,4,5]);

  const handleCopyWithin = () => {
    const newNumbers = [...numbers];
    newNumbers.copyWithin(0,3);
    setNumbers(newNumbers);
  }
  return (
    <>
      <div className="container mx-auto">
        <div className="blockContent">
          <h3 className="font-bold">Original Array</h3>
          <p>{numbers.join(', ')}</p>
          <button onClick={handleCopyWithin}>Copy Within</button>
          <h3 className="font-bold">Modified Array</h3>
          <p>{numbers.join(', ')}</p>
        </div>
      </div>
    </>
  )
}

export default CustomApp