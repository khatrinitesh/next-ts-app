"use client"
import React, { useState } from 'react'



const CustomApp:React.FC<MyComponentProps> = ({}) => {
   const [myMap,setMyMap] = useState<Map<string,number>>(new Map([
    ['a',1],
    ['b',2],
    ['c',3],
   ]));

   // function to add a new key-value pair to the map
   const addEntry = () => {
    const newMap = new Map(myMap); //Clone the existing Map
    newMap.set('d',Math.floor(Math.random() * 100)); // add a new entry
    setMyMap(newMap);
   }
   // function to delete an entry from the map
   const deleteEntry = (key:string) => {
    const newMap = new Map(myMap);
    newMap.delete(key)
    setMyMap(newMap)
   }
  return (
    <>
         <ul>
        {[...myMap].map(([key,value]) => (
          <li key={key}>
            {key} : {value} <button onClick={() => deleteEntry(key)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={addEntry}>Add Element</button>
    </> 
  )
}

export default CustomApp