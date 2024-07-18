"use client"
import React, { useState ,useEffect } from 'react';

interface Window{
    scrollX:number;
    scrollY:number;
}

const CustomApp:React.FC = () => {

    const [windowProperties,setWindowProperties] = useState<({self:number | undefined;top:number | undefined})>({
        self:window.self,
        top:window.top
    }); 

    useEffect(() => {
        // Custom properties can be set or used here
    // In this example, `self` and `top` are standard properties
        setWindowProperties({
            self:window.self,
            top:window.top
        });

        console.log('window self',window.self)
        console.log('window top',window.top)
    },[]);

    

  return (
    <>
        <h1>Window Position</h1>
        <p>Self: {windowProperties.self ? 'defined' : 'not defined'}</p>
        <p>Top: {windowProperties.top ? 'defined' : 'not defined'}</p>
    </>
  )
}

export default CustomApp