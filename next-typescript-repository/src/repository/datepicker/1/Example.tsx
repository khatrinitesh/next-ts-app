"use client";
import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface DatepickerProps {
    selectedDate: Date;
    onChange: (date: Date) => void;
  }

const Example: React.FC<DataTableProps> = ({ selectedDate, onChange  }) => {
  return (
    <>
      <DatePicker
      selected={selectedDate}
      onChange={date => onChange(date as Date)}
      dateFormat="dd/MM/yyyy"
      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
    /> 
    </>
  );
};

export default Example;
