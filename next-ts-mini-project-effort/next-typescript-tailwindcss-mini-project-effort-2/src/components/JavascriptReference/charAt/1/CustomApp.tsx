"use client"
import React, { useState } from "react";

const CustomApp = () => {
  const [input, setInput] = useState<string>("");
  const [index, setIndex] = useState<number>(0);
  const [character, setCharacter] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    if (index < e.target.value.length) {
      setCharacter(e.target.value.charAt(index));
    } else {
      setCharacter('');
    }
  };


  const handleIndexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newIndex = parseInt(e.target.value, 10);
    setIndex(newIndex);
    if (newIndex < input.length) {
      setCharacter(input.charAt(newIndex));
    } else {
      setCharacter("");
    }
  };

  return (
    <>
      <div className="mb-2">
        <label className="block mb-1">Enter a string:</label>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          className="p-2 rounded"
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Enter an index:</label>
        <input
            type="number"
            value={index}
            onChange={handleIndexChange}
            className="p-2 rounded"
          />
      </div>
      <div>
          <label className="block mb-1">Character at index {index}:</label>
          <p className="p-2 bg-white text-black rounded">{character}</p>
        </div>
    </>
  );
};

export default CustomApp;
