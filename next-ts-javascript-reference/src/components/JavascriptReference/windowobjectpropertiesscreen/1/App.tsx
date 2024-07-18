"use client"
import React, { useEffect } from 'react';

interface Window{
    myCustomProperty?:string;
    myCustomNumber?:number;
}

const CustomApp:React.FC = () => {

    useEffect(() => {
        window.myCustomProperty = 'hello world'
        window.myCustomNumber = 155

        const myProperty = window.myCustomProperty ?? 'default value';
        const myNumber = window.myCustomNumber ?? 0;

        console.log('myCustomProperty:', myProperty);
        console.log('myCustomNumber:', myNumber);
    },[])
   
  return (
    <>
     Check the console for custom window properties.
    </>
  )
}

export default CustomApp