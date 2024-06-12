"use client"
import React, { useState, useEffect } from 'react'
const CustomApp:React.FC = () => {

      const [selectedDate,setSelectedDate] = useState<Date | null>(null);

      const handleDateChange =(date:Date | null) => {
        setSelectedDate(date);
      }

  return (
    <>
    <input
        type="date"
        value={selectedDate ? selectedDate.toISOString().substr(0, 10) : ''}
        onChange={(e) => handleDateChange(new Date(e.target.value))}
      />
      
    </>
  )
}

export default CustomApp