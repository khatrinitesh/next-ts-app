"use client"
import React, { useState, useEffect } from 'react'
const CustomApp:React.FC = () => {

       const date = new Date();
       const currentGetMinutes = date.getMiutes();

  return (
    <>
    <p>{currentGetMinutes}</p>
    </>
  )
}

export default CustomApp