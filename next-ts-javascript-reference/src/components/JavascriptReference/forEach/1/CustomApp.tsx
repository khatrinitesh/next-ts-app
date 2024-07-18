"use client";
import React, { useState } from "react";

interface Item {
  id: number;
  name: string;
}

const CustomApp: React.FC = () => {

    // initialize an interface for the array elements
 const items:Item[] = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Orange" },
    { id: 4, name: "Mango" },
  ];

  // use forEach to log each item to the console 
  items.forEach((item) => {
    console.log(`Item: ${item.name}, ID: ${item.id}`);
    
  })


  return (
    <>
        <h3 className="font-bold">Items List</h3>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} (ID: {item.id})
          </li>
        ))}
      </ul>
      <br />
      <hr />
    </>
  );
};

export default CustomApp;
