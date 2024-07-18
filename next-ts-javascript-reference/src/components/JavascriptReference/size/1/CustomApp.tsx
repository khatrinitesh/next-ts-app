"use client"
import React, { useState } from 'react'

const CustomApp:React.FC<MyComponentProps> = ({}) => {
    const groupwise = new Map([
        ["apples", 500],
        ["bananas", 300],
        ["oranges", 200]
    ])

    const groupwisesize = groupwise.size;
   
  return (
    <>
       {groupwisesize}
    </> 
  )
}

export default CustomApp