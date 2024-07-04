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
      const frameElement = window.frameElement;

      if(frameElement){
        console.log('parent frame element',frameElement);
        frameElement.style.backgroundColor = 'lightblue';
      }
      else{
        console.warn('No parent frame element found.');
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

