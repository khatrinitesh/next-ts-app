"use client";
import React, { useState } from "react";

interface Item {
  id: number;
  name: string;
}

const CustomApp: React.FC = () => {
   // Initialize an array of items
   const items: Item[] = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Orange" },
    { id: 4, name: "Mango" },
  ];

   // Find the index of the item with id = 3 using findIndex()
   const itemIndex = items.findIndex((item) => item.id === 3);



  return (
    <>
    <h3 className="font-bold">Find Index Example</h3>
      <p>Index of the item with id 3: {itemIndex}</p>
      {itemIndex !== -1 && (
        <p>
          Item at index {itemIndex}: {items[itemIndex].name}
        </p>
      )}
      <h3 className="font-bold">Items List</h3>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <br />
      <hr />
    </>
  );
};

export default CustomApp;
