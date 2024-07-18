"use client"
import React, { useState, useEffect, useRef, FormEvent } from 'react';

const Example = () => {
   
  return (
    <>
    <MyComponent/>
    </>
  )
}

export default Example

const MyComponent:React.FC = () => {
    const redirectToNewPage = () => {
        // Change location to a new URL
        window.location.href = 'https://example.com';
      };
    return(
        <>
         
      <button onClick={redirectToNewPage}>Load from LocalStorage</button>
        </>
    )
}

