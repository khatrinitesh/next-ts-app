'use client'
import React,{useState} from 'react'
import Example from './Example';


const CustomApp:React.FC = () => {

    const initialItems = [
        { id: 1, text: 'Item 1' },
        { id: 2, text: 'Item 2' },
        { id: 3, text: 'Item 3' },
      ];
   
  return (
    <>
     <Example initialItems={initialItems}    /> 
    </>
  )
}

export default CustomApp

