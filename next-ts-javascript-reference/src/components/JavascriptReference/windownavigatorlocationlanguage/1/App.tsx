"use client"
import React, { useState ,useEffect } from 'react';


const CustomApp:React.FC = () => {
   const [appName,setAppName] = useState<string | null>();

   useEffect(() => {
    setAppName(window.navigator.language);
   },[]);
  return (
    <>
      {appName}
    </>
  )
}

export default CustomApp