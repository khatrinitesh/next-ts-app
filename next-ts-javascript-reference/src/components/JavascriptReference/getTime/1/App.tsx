"use client"
import React, { useState, useEffect } from 'react'
const CustomApp:React.FC = () => {

       const date = new Date();
       const currentGetTime = date.getTime();

  return (
    <>
    <p>{currentGetTime}</p>
    </>
  )
}

export default CustomApp