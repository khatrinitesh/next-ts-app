'use client'
import React,{useState} from 'react';
import { Person } from './interface';


const CustomApp = () => {

    let originalArray: number[] = [1, 2, 3, 4, 5];

    const reversedArray:number[] = [...originalArray].reverse();
   
  return (
    <>
    {JSON.stringify(originalArray)}
    <br />
    {JSON.stringify(reversedArray)}
    </>
  )
}

export default CustomApp