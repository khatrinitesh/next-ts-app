"use client"
import React from 'react';
import Example from './Example';

const CustomApp = () => {

    const handleClick = ()=> {
        alert('hi')
    }
  return (
    <>
        <Example message="This is a Banner" btnText="btn primary" onBtnClick={handleClick}/>
    </>
  )
}

export default CustomApp