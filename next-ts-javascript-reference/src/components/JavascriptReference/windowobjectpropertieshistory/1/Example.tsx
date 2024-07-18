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
   
    const [historyLength,setHistoryLength] = useState(0);

    useEffect(() => {
        const length = window.history.length;
        setHistoryLength(length);
    },[]);
    return(
        <>
             <h1>History Length: {historyLength}</h1>
             <p>Manipulating history length in React component.</p>
        </>
    )
}

