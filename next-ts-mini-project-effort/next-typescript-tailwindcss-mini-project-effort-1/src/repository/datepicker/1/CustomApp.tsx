"use client";
import React, { useState } from "react";
import Example from "./Example";

const CustomApp = () => {


    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const handleDateChange = (date: Date) => {
      setSelectedDate(date);
      // Do something with the selected date
    };
   
  return (
    <>
     <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Datepicker Example</h1>
      <Example selectedDate={selectedDate} onChange={handleDateChange} />
    </div>
    </>
  );
};

export default CustomApp;
