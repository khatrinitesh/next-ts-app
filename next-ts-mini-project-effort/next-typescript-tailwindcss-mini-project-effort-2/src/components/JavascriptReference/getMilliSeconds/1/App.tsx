"use client"
import React, { useState, useEffect } from 'react'
const CustomApp:React.FC = () => {

       const date = new Date();
       const currentGetHours = date.getMilliseconds();

  return (
    <>
    <p>{currentGetHours}</p>
    </>
  )
}

export default CustomApp