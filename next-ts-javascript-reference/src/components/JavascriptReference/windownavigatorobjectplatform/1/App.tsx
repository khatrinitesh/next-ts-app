"use client"
import React, { useState ,useEffect } from 'react';


const CustomApp:React.FC = () => {
   const [platForm,setPlatform] = useState<string | null>(null);

   useEffect(() => {
    setPlatform(window.navigator.platform)
   },[]);
  return (
    <>
      {platForm}
    </>
  )
}

export default CustomApp