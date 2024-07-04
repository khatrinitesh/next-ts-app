"use client"
import React, { useState, useEffect, useRef } from 'react';

const Example = () => {
   
  return (
    <>
    <MyComponent/>
    </>
  )
}

export default Example

const MyComponent:React.FC = () => {
    useEffect(() => {
        const myElement = document.getElementById('myElementId');

    if(myElement){
        myElement.style.backgroundColor = 'lightblue';
    }
    },[]);
    
    return(
        <>
             <h1>Accessing DOM Element Safely in React</h1>
      {/* Element to manipulate */}
      <div id="myElementId">
        <p>Content inside the element</p>
      </div>
        </>
    )
}

