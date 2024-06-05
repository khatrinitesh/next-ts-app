"use client";
import React, { useState } from "react";
import Example from "./Example";

const CustomApp = () => {

    const [checkboxValues, setCheckboxValues] = useState<{ [key: string]: boolean }>({
        checkbox1: false,
        checkbox2: false,
        // Add more checkboxes as needed
      });
    
      const handleCheckboxChange = (name: string, checked: boolean) => {
        setCheckboxValues(prevState => ({
          ...prevState,
          [name]: checked,
        }));
      };
    
      const handleSubmit = () => {
        // Use checkboxValues object where needed
        console.log(checkboxValues);
      };

  return (  
    <>
     <h1 className="text-3xl font-bold mb-4">Get checkbox values using checkbox name</h1>
     <Example
        name="checkbox1"
        label="Checkbox 1"
        checked={checkboxValues.checkbox1}
        onChange={(checked) => handleCheckboxChange("checkbox1", checked)}
      />
      <Example
        name="checkbox2"
        label="Checkbox 2"
        checked={checkboxValues.checkbox2}
        onChange={(checked) => handleCheckboxChange("checkbox2", checked)}
      />
      {/* Add more Checkbox components as needed */}

      <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded-full mt-4">Submit</button>
    </>
  );
};

export default CustomApp;
