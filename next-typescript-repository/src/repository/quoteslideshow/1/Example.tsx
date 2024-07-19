"use client"
// custom hooks - state management
import React, { useState ,useEffect,useRef  } from "react";
// library
// next image
import Image from "next/image";
// interface
import { QuoteProps } from "./interface";
// constants
import { quotes } from "./constants";


const Example = () => {
   
  return (
    <>
     <QuoteComp quotes={quotes}/>
    </>
  )
};

export default Example;


interface QuoteCompProps {
    quotes:QuoteProps[]
}

const QuoteComp:React.FC<QuoteCompProps > = ({quotes}) => {
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const nextQuote = () => {
    setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };

  const prevQuote = () => {
    setCurrentQuoteIndex((prevIndex) =>
      prevIndex === 0 ? quotes.length - 1 : prevIndex - 1
    );
  };
   
    return(
        <>
         <div className="max-w-lg mx-auto p-4">
      <div className="relative bg-white shadow-md rounded-lg p-6">
        <blockquote className="text-center">
          <p className="text-xl italic">{quotes[currentQuoteIndex].text}</p>
          {quotes[currentQuoteIndex].author && (
            <footer className="mt-4 text-gray-600">
              - {quotes[currentQuoteIndex].author}
            </footer>
          )}
        </blockquote>
        <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full">
          <button
            className="text-gray-600 focus:outline-none"
            onClick={prevQuote}
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM2.5 10a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M10 6a.5.5 0 01.5.5v3.793l2.146-2.147a.5.5 0 11.708.707l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 11.707-.707L9.5 10.293V6.5a.5.5 0 01.5-.5z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button
            className="text-gray-600 focus:outline-none"
            onClick={nextQuote}
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM2.5 10a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M10 6a.5.5 0 01.5.5v3.793l2.146-2.147a.5.5 0 11.708.707l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 11.707-.707L9.5 10.293V6.5a.5.5 0 01.5-.5z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
        </>
    )
}