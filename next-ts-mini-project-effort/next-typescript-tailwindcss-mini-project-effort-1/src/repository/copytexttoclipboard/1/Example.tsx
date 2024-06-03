
"use client"
import React, { useState } from "react";



const Example: React.FC<> = () => {


    const copyToClipboard = (text:string) => {
        navigator.clipboard.writeText(text)
        .then(() =>{
            alert('copied to clipboard');
        })
        .catch((error) => {
            console.error('Error copying to clipboard:', error);
        })
    }   

  return (
    <>
     <button onClick={() => copyToClipboard('Text to copy')}>Copy Text</button>
    </>
  );
};

export default Example;
