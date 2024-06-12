"use client"
import React, { useState, useEffect } from 'react'

const CustomApp:React.FC = () => {

    const [currentDate,setCurrentDate] = useState<Date>(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(new Date());
        },1000);
        return () => clearInterval(intervalId);
    },[]);
    

  return (
    <>
    <h1 className="font-bold">Current Date and Time</h1>
    <p>{currentDate.toString()}</p>
    </>
  )
}

export default CustomApp