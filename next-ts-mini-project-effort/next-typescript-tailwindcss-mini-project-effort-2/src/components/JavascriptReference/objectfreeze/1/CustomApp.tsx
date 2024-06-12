"use client"
import React, { useState } from 'react'

interface Entry {
    id: number;
    title: string;
    content: string;
  }





const CustomApp:React.FC<MyComponentProps> = ({data}) => {
    const entry: Entry = {
        id: 1,
        title: "My First Entry",
        content: "This is the content of my first entry."
      };

      const frozenEntry: Entry = Object.freeze(entry);
   
  return (
    <>
        <h2>{frozenEntry.title}</h2>
        <p>{frozenEntry.content}</p>
    </>
  )
}

export default CustomApp