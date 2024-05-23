"use client"
import React from 'react';
import Example from './Example';

const CustomApp = () => {
    const handleClick = () => {
        alert('hi')
    }

  return (
    <>
        <Example onClick ={handleClick} label="block buttons"/>
    </>
  )
}

export default CustomApp