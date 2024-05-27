'use client'
import React,{useState} from 'react'
import Example from './Example'

const CustomApp = () => {

    const [isChecked, setIsChecked] = useState(false);
  return (
    <>
     <Example label="test" checked={isChecked} onChange={setIsChecked}/> 
    </>
  )
}

export default CustomApp

