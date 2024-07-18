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

  // Find an item with id = 2 using find()
  const foundItem = items.find((item) => item.id === 2);

  // Find all items with names containing 'a' using filter()
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes("a")
  );

  return (
    <>
     <h3 className="font-bold">Found Item</h3>
      {foundItem && <p>Found Item: {foundItem.name}</p>}
      <h3 className="font-bold">Filtered Items</h3>
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <br />
      <hr />
    </>
  );
};

export default CustomApp;
