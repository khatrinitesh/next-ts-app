import React from 'react'

const CustomApp = () => {
    let age:number=34;
    let message:string;

    message = age>=18 ? 'You are an adult' : 'You are a minor'
    
    
  return (
    <>
    {message}
    </>
  )
}

export default CustomApp