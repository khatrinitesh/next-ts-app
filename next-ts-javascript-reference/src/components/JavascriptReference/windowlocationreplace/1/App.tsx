"use client"
import React, { useState ,useEffect } from 'react';


const CustomApp:React.FC = () => {

   
const btnReplace = () => {
    window.location.replace('https://www.w3schools.com/jsref/met_loc_replace.asp', '_blank','noopener,noreferrer');
}

  return (
    <>
     <button onClick={btnReplace}>Replace</button>
    </>
  )
}

export default CustomApp