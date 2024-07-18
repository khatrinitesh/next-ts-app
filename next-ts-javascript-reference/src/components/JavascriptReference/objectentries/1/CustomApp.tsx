"use client"
import React, { useState } from 'react'

interface Entry {
    id: number;
    title: string;
    content: string;
  }





const CustomApp:React.FC<MyComponentProps> = ({data}) => {
    const entry:Entry = {
        id: 1,
      title: "My First Entry",
      content: "This is the content of my first entry."
      }
   
  return (
    <>
       <h2>{entry.title}</h2>
       <p>{entry.content}</p>
    </>
  )
}

export default CustomApp