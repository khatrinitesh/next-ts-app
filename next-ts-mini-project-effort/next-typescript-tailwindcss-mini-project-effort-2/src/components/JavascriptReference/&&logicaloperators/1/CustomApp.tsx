"use client"
import React, { useState } from 'react'

interface Person{
    id:1,
    name:string;
}

const CustomApp = () => {
    const [text,setText] = useState(true)
    const [person,setPerson]= useState<Person[]>([])
    
    
  return (
    <>
    {text && (<><Example/></>)}
    {person}
    </>
  )
}

export default CustomApp

const Example = () => {
    return(
        <>
        it is an example
        </>
    )
}