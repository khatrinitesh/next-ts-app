"use client"
import React, { useState } from "react";
import Example from "./Example";


const CustomApp = () => {
    const [selectedValue, setSelectedValue] = useState<string>('option1');

    const handleRadioChange = (value: string) => {
      setSelectedValue(value);
      console.log('Selected value:', value);
    };
  

  return (
    <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl mb-4">Custom Radio Button Example</h1>
      <Example
        label="Option 1"
        name="customRadio"
        value="option1"
        checked={selectedValue === 'option1'}
        onChange={handleRadioChange}
      />
      <Example
        label="Option 2"
        name="customRadio"
        value="option2"
        checked={selectedValue === 'option2'}
        onChange={handleRadioChange}
      />
      <Example
        label="Option 3"
        name="customRadio"
        value="option3"
        checked={selectedValue === 'option3'}
        onChange={handleRadioChange}
      />
    </div>
  );
};

export default CustomApp;
