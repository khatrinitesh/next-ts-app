"use client"
import React, { useState, useEffect } from 'react'
const CustomApp:React.FC = () => {

       const date = new Date();
       const currentFullYer = date.getFullYear();

  return (
    <>
    <p>{currentFullYer}</p>
    </>
  )
}

export default CustomApp