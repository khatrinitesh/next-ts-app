"use client"
import React, { useState } from 'react'



const CustomApp:React.FC = () => {
    const numbers: number[] = [1, 2, 3, 4, 5];

    const fruits:string[] = ['aasdad','basdd','asdadc']

    const numberElements:JSX.Element[] = [];
    for(let i=0;i<numbers.length;i++){
        numberElements.push(<li key={i}>{numbers[i]}</li>)
    }
   
  return (
    <>
       {fruits.join(', ')}
       <ul>
        {numberElements}
       </ul>
    
    </>
  )
}

export default CustomApp
