"use client"
import React, { useState } from 'react'
import styled from 'styled-components';

interface Entry {
    id: number;
    title: string;
    content: string;
  }


const CustomApp:React.FC<MyComponentProps> = ({data}) => {
    const entryArray: [string, any][] = [
        ["id", 1],
        ["title", "My First Entry"],
        ["content", "This is the content of my first entry."]
      ];
    
      // Convert array of arrays to object
      const entryObject: Entry = Object.fromEntries(entryArray);
      const ButtonStyle = styled.button`
      padding: 12px 20px;
      border: 1px solid red;
      background-color: orange;
      border-radius: 10px;
      transition: 0.3s all linear;
  
      &:hover {
          background-color: red;
          color:white;
      }
  `;
   
  return (
    <>
        <h2>{entryObject.title}</h2>
        <p>{entryObject.content}</p>
        <ButtonStyle>Click</ButtonStyle>
    </>
  )
}

export default CustomApp