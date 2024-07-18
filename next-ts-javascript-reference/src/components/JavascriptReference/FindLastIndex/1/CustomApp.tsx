"use client";
import React, { useState } from "react";

interface Item {
  id: number;
  name: string;
}

const CustomApp: React.FC = () => {
  const items:Item[] = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Orange" },
    { id: 4, name: "Mango" },
    { id: 5, name: "Banana" },
  ]

  // find the last item with the name 'banana' using findLast
  const foundItem = items.reverse().find((item) => item.name === "Banana");


  return (
    <>
        <h3 className="font-bold">Find Last Example</h3>
        {foundItem ? (
            <>
             <p>
          Last Item with name "Banana": {foundItem.name} (ID: {foundItem.id})
        </p>
            </>
        )
         :
         (<><p>no Item found</p></> )
         }

<h3 className="font-bold">Items List</h3>
      <ul>
        {items.reverse().map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <br />
      <hr />
    </>
  );
};

export default CustomApp;
