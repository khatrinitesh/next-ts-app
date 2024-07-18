"use client"
import React, { useState, useEffect } from 'react'

const CustomApp:React.FC = () => {

     const [minutes,setMinutes] = useState<number>(0);

     const updateMinutes = (newMinutes:number) => {
        setMinutes(newMinutes);
     }

  return (
    <>
    <div>Minutes: {minutes}</div>
    <button onClick={() => updateMinutes(30)}>Set Minutes to 30</button>
    </>
  )
}

export default CustomApp