"use client";
import React, { useState } from "react";

interface Item {
  id: number;
  name: string;
}

const CustomApp: React.FC = () => {
 // Initialize a nested array of items
 const nestedItems: Item[][] = [
    [
      { id: 1, name: "Apple" },
      { id: 2, name: "Banana" }
    ],
    [
      { id: 3, name: "Orange" },
      { id: 4, name: "Mango" }
    ],
    [
      { id: 5, name: "Grapes" }
    ]
  ];


  const flattenedItems:Item[] = nestedItems.flat();


  return (
    <>
        <h3 className="font-bold">Flattened Items</h3>
      <ul>
        {flattenedItems.map((item) => (
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
