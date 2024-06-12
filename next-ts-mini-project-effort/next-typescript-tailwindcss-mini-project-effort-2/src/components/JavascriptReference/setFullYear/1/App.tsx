"use client"
import React, { useState, useEffect } from 'react'

const CustomApp:React.FC = () => {

      const [date,setDate] = useState<Date>(new Date());

      const handleSetFullYear  =() => {
        const newData = new Date(date);
        newData.setFullYear(2025); //set the desired full year
        setDate(newData)
      }

  return (
    <>
    <p>Current Date: {date.toLocaleDateString()}</p>
    <button onClick={handleSetFullYear}>Set Full Year to 2025</button>  
    </>
  )
}

export default CustomApp