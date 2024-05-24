"use client"
import React from 'react'
import Example from './Example'

const CustomApp = () => {
  
    const happy = [
        {id:1,name:'test1',age:34,grade:'A'},
        {id:2,name:'test2',age:44,grade:'B'},
        {id:3,name:'test3',age:54,grade:'C'},
    ]
  return (
    <>
    <div>
        <Example students={happy} />
    </div> 
    </>
  )
}

export default CustomApp