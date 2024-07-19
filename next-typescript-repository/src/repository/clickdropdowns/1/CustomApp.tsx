'use client'
import React,{useState} from 'react'
import Example from './Example';

const items = [
    { id: 1, label: 'Option 1' },
    { id: 2, label: 'Option 2' },
    { id: 3, label: 'Option 3' },
  ];


const CustomApp:React.FC = () => {

    const handleSelect = (item: { id: number; label: string }) => {
        console.log('Selected item:', item);
      };
  return (
    <>
     <Example items={items} onSelect={handleSelect}   /> 
    </>
  )
}

export default CustomApp

