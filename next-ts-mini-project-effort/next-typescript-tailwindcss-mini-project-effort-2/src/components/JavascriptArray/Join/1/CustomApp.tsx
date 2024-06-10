"use client";
import React, { useState } from "react";
import { Item } from "./interface";

const CustomApp: React.FC = () => {

    // initialize an interface for the array elements
 const items:Item[] | string = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Orange  " },
    { id: 4, name: "Mango" },
  ];
 // Use join() to concatenate item names into a single string
  const concatenatedNames = items.map(item => item.name).join(", ");
  return (
    <>
     <h3 className="text-2xl font-bold mb-4">Items List</h3>
      <ul className="mb-4">
        {items.map((item) => (
          <li key={item.id} className="mb-2">
            {item.name}
          </li>
        ))}
      </ul>
      <p className="mt-4">
        Concatenated Names: <span className="font-semibold">{concatenatedNames}</span>
      </p>
      <br />
      <hr />
    </>
  );
};

export default CustomApp;
