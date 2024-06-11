'use client'
import React,{useState} from 'react';
import { Person } from './interface';


const CustomApp = () => {

    let arr: number[] = [1, 2, 3, 4, 5];

    const resultarr = arr.splice(1,2)
   
  return (
    <>
    {resultarr}
    </>
  )
}

export default CustomApp