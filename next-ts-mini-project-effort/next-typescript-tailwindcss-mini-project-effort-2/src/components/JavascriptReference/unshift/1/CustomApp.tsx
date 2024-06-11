'use client'
import React,{useState} from 'react';
import { Person } from './interface';


const CustomApp = () => {

    const [items, setItems] = useState<number[]>([1, 2, 3]);
    const addItemToFront = () => {
        const newItems = [...items]; // Create a copy of the items array
        newItems.unshift(Math.floor(Math.random() * 100)); // Add a random number to the front
        setItems(newItems); // Update the state with the new array
    };
   
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