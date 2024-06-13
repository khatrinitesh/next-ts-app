"use client"
import React, { useState } from 'react'

const CustomApp:React.FC<> = ({}) => {
  const x:number = 5;
  const y:string = '5';

  if(x !== y){
    console.log('yes it is equal');
  }
  else{
    console.log('yes it is not equal');
  }
  return (
    <>
    </> 
  )
}

export default CustomApp