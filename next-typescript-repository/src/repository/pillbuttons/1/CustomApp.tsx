"use client"
import React from 'react';
import Example from './Example';
import Wallpaper from "../../../assets/img/wallpaper.jpg";

const CustomApp = () => {
    const handleClick = () => {
        console.log('text');
        
    }
    
  return (
    <div>
        <Example text="text" onClick={handleClick}/>
    </div>
  )
}

export default CustomApp