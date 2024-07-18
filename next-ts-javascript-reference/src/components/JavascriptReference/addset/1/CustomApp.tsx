"use client"
import React, { useState } from 'react'

interface MyComponentProps {
    // define your component props here if needed
}

const CustomApp:React.FC<MyComponentProps> = ({}) => {
  
  const [letters,setLetters] = useState<Set<string>>(new Set(['a','b','c']))
  const [words,setWords] = useState<Set<string>>(new Set(['happy','motivation','positive','confident','consider','focus']));

  // function to add a new letter to the set of letters
  const addLetter = (newLetter:string) => {
    setLetters(prevLetters => new Set([...prevLetters,newLetter]))
  }

  // function to add a new word to the set of words
  const addWords = (newWords:string) => {
    setWords(prevWords => new Set([...prevWords,newWords]));
  }

    

  return (
    <>
         <div>
        Letters: {Array.from(letters).join(', ')} <br />
        Words: {Array.from(words).join(', ')}
      </div>
      <button onClick={() => addLetter('d')}>Add Letter 'd'</button>
      <button onClick={() => addWords('excited')}>Add Word 'excited'</button>
    </>
  )
}

export default CustomApp