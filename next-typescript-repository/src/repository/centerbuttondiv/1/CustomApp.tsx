"use client"
import React from 'react'
import Example from './Example'

const CustomApp = () => {
  const handleClick = () => {
    alert('hi')
  }
  return (
    <>
    <div>
        <Example text="Btn" onClick={handleClick}/>
    </div> 
    </>
  )
}

export default CustomApp