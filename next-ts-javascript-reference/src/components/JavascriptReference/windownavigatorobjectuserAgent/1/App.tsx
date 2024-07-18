"use client"
import React, { useState ,useEffect } from 'react';


const CustomApp:React.FC = () => {
   const [agent,setAgent] = useState<string | null>(null);

   useEffect(() => {
    setAgent(window.navigator.userAgent)
   },[]);
  return (
    <>
      {agent}
    </>
  )
}

export default CustomApp