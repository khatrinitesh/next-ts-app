'use client'
import React,{useState} from 'react';
import { Person } from './interface';


const CustomApp = () => {
    
   
  return (
    <>
     <h2 className="text-lg font-bold mb-2">Items</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button
        className="bg-green-500 text-white p-2 rounded"
        onClick={addItemToFront}
      >
        Add Item to Front
      </button>
    </>
  )
}

export default CustomApp