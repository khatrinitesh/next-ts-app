"use client"
import React, { useState, useEffect } from 'react'
const CustomApp:React.FC = () => {

       const currentNow = Date.now();

  return (
    <>
    <p>{currentNow}</p>
    </>
  )
}

export default CustomApp