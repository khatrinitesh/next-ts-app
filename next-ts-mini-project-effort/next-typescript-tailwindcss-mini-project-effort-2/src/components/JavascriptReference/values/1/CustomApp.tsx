"use client"
import React, { useState } from 'react'



const CustomApp:React.FC<MyComponentProps> = ({}) => {
    const [mySet, setMySet] = useState<Set<number>>(new Set([1, 2, 3]));

    const addElement = () => {
      const newSet = new Set(mySet);
      newSet.add(Math.floor(Math.random() * 100)); // Add a random number
      setMySet(newSet);
    };
  
    const removeElement = (element: number) => {
      const newSet = new Set(mySet);
      newSet.delete(element);
      setMySet(newSet);
    };
  
    // Convert the Set to an array to access its values
    const setValuesArray = [...mySet];
  return (
    <>
         <ul>
        {setValuesArray.map((element, index) => (
          <li key={index}>
            {element} <button onClick={() => removeElement(element)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={addElement}>Add Element</button>
    </>
  )
}

export default CustomApp