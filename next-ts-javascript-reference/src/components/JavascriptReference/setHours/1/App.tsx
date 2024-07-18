"use client"
import React, { useState, useEffect } from 'react'

const CustomApp:React.FC = () => {

      const [hours,setHours] = useState<number>(0);

      const handleHourChange  =(event:React.ChangeEvent<HTMLInputElement>) => {
        const newHours = parseInt(event.target.value);
        setHours(newHours)
      }

  return (
    <>
    <label htmlFor="hours">Enter Hours:</label>
    <input
        type="number"
        id="hours"
        value={hours}
        onChange={handleHourChange}
      />
      <p>Selected hours: {hours}</p>
    </>
  )
}

export default CustomApp