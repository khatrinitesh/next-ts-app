"use client"
import React, { useState, useEffect, useRef, FormEvent } from 'react';

const Example = () => {
   
  return (
    <>
    <MyComponent/>
    </>
  )
}

export default Example

const MyComponent:React.FC = () => {
    const [name, setName] = useState('');


    const handleChange =(event:React.ChangeEvent<InputEvent>) => {
        setName(event.target.value);
    }

    const handleSubmit = (event:React.FormEvent<FormEvent>) => {
        event.preventDefault();
        localStorage.setItem('username',name);
        alert(`Saved ${name} to localStorage!`)
    }

    const handleLoadFromLocalStorage = () => {
        const storedName = localStorage.getItem('userName');
        alert(`Loaded ${storedName} from localStorage!`);
    }
    return(
        <>
          <h1>React LocalStorage Example</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input type="text" value={name} onChange={handleChange} />
        </label>
        <button type="submit">Save to LocalStorage</button>
      </form>
      <button onClick={handleLoadFromLocalStorage}>Load from LocalStorage</button>
        </>
    )
}

