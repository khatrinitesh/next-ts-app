"use client"
import React, { useState } from 'react'

interface MyObject{
    id:number;
    name:string;
    age:number;
}


const CustomApp:React.FC<> = ({}) => {
    const newObj:MyObject = {
        id:1,
        name:'test',
        age:45
    }
   
  return (
    <>
    <p>Id: {newObj.id}</p>
    <p>Name: {newObj.name}</p>
    <p>Age: {newObj.age}</p>
    </>
  )
}

export default CustomApp