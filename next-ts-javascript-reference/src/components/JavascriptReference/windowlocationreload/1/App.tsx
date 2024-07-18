"use client"
import React, { useState ,useEffect } from 'react';


const CustomApp:React.FC = () => {

   
const btnReload = () => {
    window.location.reload();
}

  return (
    <>
     <button onClick={btnReload}>Reload</button>
    </>
  )
}

export default CustomApp