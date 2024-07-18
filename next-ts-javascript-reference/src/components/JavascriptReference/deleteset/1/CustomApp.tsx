"use client"
import React, { useState } from 'react'

interface MyComponentProps {
    // define your component props here if needed
}

const CustomApp:React.FC<MyComponentProps> = ({}) => {
  
  const [letters,setLetters] = useState<Set<string>>(new Set(['a','b','c']))
  const [words,setWords] = useState<Set<string>>(new Set(['happy','motivation','positive','confident','consider','focus']));

  // function to add a new letter to the set of letters
  const deleteLetter = (letter:string) => {
    setLetters(prevLetters => new Set<string>())
  }

  // function to clearadd a new word to the set of words
  const deleteWord = (word:string) => {
    setWords(prevWords => new Set<string>());
  }
  return (
    <>
         <div>
        Letters: {Array.from(letters).join(', ')} <br />
        Words: {Array.from(words).join(', ')}
      </div>
      <button onClick={() => deleteLetter('a')}>Delete Letter 'a'</button>
      <button onClick={() => deleteWord('happy')}>Delete Word 'happy'</button>
    </>
  )
}

export default CustomApp