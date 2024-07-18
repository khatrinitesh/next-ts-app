"use client"
import React, { useState } from 'react'

interface MyComponentProps {
    // define your component props here if needed
}

const CustomApp:React.FC<MyComponentProps> = ({}) => {
  
  const [letters,setLetters] = useState<Set<string>>(new Set(['a','b','c']))
  const [words,setWords] = useState<Set<string>>(new Set(['happy','motivation','positive','confident','consider','focus']));

  // function to add a new letter to the set of letters
  const clearLetter = () => {
    setLetters(prevLetters => new Set<string>())
  }

  // function to clearadd a new word to the set of words
  const clearWords = () => {
    setWords(prevWords => new Set<string>());
  }
  return (
    <>
         <div>
        Letters: {Array.from(letters).join(', ')} <br />
        Words: {Array.from(words).join(', ')}
      </div>
      <button onClick={clearLetter}>Clear Letter 'd'</button>
      <button onClick={clearWords}>Clear Word 'excited'</button>
    </>
  )
}

export default CustomApp