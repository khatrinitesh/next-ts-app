"use client"
import React, { useState, useEffect } from 'react'
const CustomApp:React.FC = () => {

       const date = new Date();
       const currentGetSeconds = date.getSeconds();

  return (
    <>
    <p>{currentGetSeconds}</p>
    </>
  )
}

export default CustomApp