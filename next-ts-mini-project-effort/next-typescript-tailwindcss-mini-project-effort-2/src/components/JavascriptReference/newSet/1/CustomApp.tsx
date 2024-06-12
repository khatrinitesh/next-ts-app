"use client"
import React, { useState } from 'react'

const CustomApp:React.FC<MyComponentProps> = ({}) => {
  
   const letters = new Set(['a','b','c'])

   const words = new Set(['happy','motivation','inspiration','positive','confident','consider','focus','believe'])

   const resultJoin = Array.from(words).join(', ')
  return (
    <>
        {letters} <br /> {resultJoin}
    </>
  )
}

export default CustomApp