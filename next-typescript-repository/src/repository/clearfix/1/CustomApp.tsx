'use client'
import React,{useState} from 'react'
import Example from './Example';

const items: Item[] = [
    { id: 1, title: '1', imgSrc: '/path/to/1.png' },
    { id: 2, title: '2', imgSrc: '/path/to/2.png' },
    { id: 3, title: '3', imgSrc: '/path/to/3.png' },
  ];

const CustomApp:React.FC = () => {
  return (
    <>
     <Example items={items}   /> 
    </>
  )
}

export default CustomApp

