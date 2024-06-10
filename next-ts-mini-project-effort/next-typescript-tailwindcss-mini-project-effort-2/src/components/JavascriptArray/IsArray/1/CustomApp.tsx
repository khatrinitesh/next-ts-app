"use client";
import React, { useState } from "react";

import { Item } from "./interface";

const CustomApp: React.FC = () => {

    // initialize an interface for the array elements
 const variable:Item[] | string = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Orange" },
    { id: 4, name: "Mango" },
  ];

  const [isArray, setIsArray] = useState<boolean>(Array.isArray(variable));






  return (
    <>
     <h3 className="text-2xl font-bold mb-4">Items List</h3>
      {isArray ? (
        <ul className="mb-4">
          {(variable as Item[]).map((item) => (
            <li key={item.id} className="mb-2">
              {item.name}
            </li>
          ))}
        </ul>
      ) : (
        <p className="mb-4">The variable is not an array.</p>
      )}
      <p className="mt-4">
        {isArray
          ? "The variable is an array."
          : "The variable is not an array."}
      </p>
      <br />
      <hr />
    </>
  );
};

export default CustomApp;
