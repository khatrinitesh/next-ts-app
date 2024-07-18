'use client'
import React,{useState} from 'react';
import { Person } from './interface';


const CustomApp = () => {

    let originalArray: number[] = [1, 2, 3, 4, 5];

    const sortedArray:number[] = [...originalArray].sort((a,b) => a-b);
   
  return (
    <>
    {JSON.stringify(originalArray)}
    <br />
    {JSON.stringify(sortedArray)}
    </>
  )
}

export default CustomApp