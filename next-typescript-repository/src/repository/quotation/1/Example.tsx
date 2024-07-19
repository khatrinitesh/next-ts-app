"use client"
// custom hooks - state management
import React, { useState ,useEffect,useRef  } from "react";
// library
// next image
import Image from "next/image";
// interface
import { QuoteProps } from "./interface";
// constants


const Example = () => {
   
  return (
    <>
     <div className="max-w-lg mx-auto">
        <QuoteComp text="The only way to do great work is to love what you do." author="Steve Jobs" />
        <QuoteComp text="In three words I can sum up everything I've learned about life: it goes on." author="Robert Frost" />
        <QuoteComp text="Success is not final, failure is not fatal: It is the courage to continue that counts." author="Mahatma Gandhi"/>
      </div>
    </>
  )
};

export default Example;

const QuoteComp:React.FC<QuoteProps> = ({text,author}) => {
   
    return(
        <>
        <blockquote className="text-center bg-white shadow-md rounded-lg p-6">
      <p className="text-xl italic">{text}</p>
      {author && <footer className="mt-4 text-white">{`- ${author}`}</footer>}
    </blockquote>
        </>
    )
}