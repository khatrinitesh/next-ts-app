"use client"
import React, { useState, useEffect } from 'react'
import { getDate } from './dateUtils'
const CustomApp:React.FC = () => {

       

  return (
    <>
    <p>{getDate()}</p>
    </>
  )
}

export default CustomApp