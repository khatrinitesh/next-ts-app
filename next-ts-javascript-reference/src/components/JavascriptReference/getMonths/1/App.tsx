"use client"
import React, { useState, useEffect } from 'react'
const CustomApp:React.FC = () => {

       const date = new Date();
       const currentGetMonths = date.getMonth();

  return (
    <>
    <p>{currentGetMonths}</p>
    </>
  )
}

export default CustomApp