"use client";
import React, { useState } from "react";

interface ClearInputProps{
    placeholder?:string;
}

const Example: React.FC<ClearInputProps> = ({placeholder}) => {
    const [inputVal,setInputval] = useState<string>('')

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setInputval(event.target.value)
    }

    const handleClear = () => {
        setInputval('');
    }
  return (
    <>
      <input type="text" value={inputVal} onChange={handleChange} />
      <button onClick={handleClear}>Clear</button>
    </>
  );
};

export default Example;
