"use client"
import React, { useState } from 'react'



const CustomApp:React.FC = () => {
    const [dayOfWeek, setDayOfWeek] = useState<string>('Monday');
    const handleDayChange  =(newDay:string) =>{
        setDayOfWeek(newDay)
    }

    const getWeekdayMessage = (day: string) => {
        switch (day) {
            case 'Monday':
                return 'It\'s Monday. Start of a new week!';
            case 'Tuesday':
                return 'It\'s Tuesday. Keep pushing!';
            case 'Wednesday':
                return 'It\'s Wednesday. Halfway there!';
            case 'Thursday':
                return 'It\'s Thursday. Almost weekend!';
            case 'Friday':
                return 'It\'s Friday. Time to celebrate!';
            case 'Saturday':
                return 'It\'s Saturday. Enjoy your weekend!';
            case 'Sunday':
                return 'It\'s Sunday. Rest and recharge!';
            default:
                return 'Invalid day!';
        }
    };
   
  return (
    <>
        <h1>Day of the Week: {dayOfWeek}</h1>
        <p>{getWeekdayMessage(dayOfWeek)}</p>
        <button onClick={() => handleDayChange('Monday')}>Monday</button>
        <button onClick={() => handleDayChange('Tuesday')}>Tuesday</button>
        <button onClick={() => handleDayChange('Wednesday')}>Wednesday</button>
        <button onClick={() => handleDayChange('Thursday')}>Thursday</button>
        <button onClick={() => handleDayChange('Friday')}>Friday</button>
        <button onClick={() => handleDayChange('Saturday')}>Saturday</button>
        <button onClick={() => handleDayChange('Sunday')}>Sunday</button>
    
    </>
  )
}

export default CustomApp
