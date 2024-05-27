'use client'
import React,{useState} from 'react'
import Example from './Example'

const CustomApp = () => {

    const [inputValue, setInputValue] = useState('');

  return (
    <>
     <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded"
        placeholder="Enter a value"
      />
     <Example value={inputValue} /> 
    </>
  )
}

export default CustomApp

