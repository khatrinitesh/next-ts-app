"use client"
import React, { useState, useEffect } from 'react'
import { getDay } from './dateUtils'
const CustomApp:React.FC = () => {

       

  return (
    <>
    <p>{getDay()}</p>
    </>
  )
}

export default CustomApp