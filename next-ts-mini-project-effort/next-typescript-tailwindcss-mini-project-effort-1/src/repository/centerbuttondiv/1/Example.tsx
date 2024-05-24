"use client"
import React, { useState } from 'react';
import styled from 'styled-components';

interface ButtonProps{
  text:string;
  onClick:() => void;
}

const Btn = styled.button`
  width: 150px;
  height: 50px;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005bb5;
  }
`

const Example:React.FC<ButtonProps> = ({text,onClick}) => {
    
  return (
    <>
       <Btn onClick={onClick}>{text}</Btn>
    </>
  )
}

export default Example