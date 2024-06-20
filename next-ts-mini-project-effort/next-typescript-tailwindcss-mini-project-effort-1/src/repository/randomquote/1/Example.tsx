"use client"
// custom hooks - state management
import React, { useState ,useEffect,useRef  } from "react";
// library
// next image
import Image from "next/image";
// interface
// constants
import { quotes } from "./constants";


const Example = () => {
   
  return (
    <>
     <RandomQuoteComp quotes={quotes}/>
    </>
  )
};

export default Example;



const RandomQuoteComp:React.FC< > = ({quotes}) => {
    const [currentQuote, setCurrentQuote] = useState<Quote | null>(null);

    const getRandomQuote = () => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setCurrentQuote(quotes[randomIndex]);
    };
   
    return(
        <>
         <div className="relative bg-white shadow-md rounded-lg p-6">
        {currentQuote ? (
          <blockquote className="text-center">
            <p className="text-xl italic">{currentQuote.text}</p>
            {currentQuote.author && (
              <footer className="mt-4 text-gray-600">
                - {currentQuote.author}
              </footer>
            )}
          </blockquote>
        ) : (
          <p className="text-center text-gray-600">Click the button to get a random quote.</p>
        )}
        <div className="flex justify-center mt-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            onClick={getRandomQuote}
          >
            Get Random Quote
          </button>
        </div>
      </div>
        </>
    )
}