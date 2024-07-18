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

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [itemFound, setItemFound] = useState<boolean>(false);

  const handleSearch = () => {
    const names = items.map(item => item.name);
    setItemFound(names.includes(searchTerm));
  };


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
      <input
        type="text"
        placeholder="Search item"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border rounded py-2 px-4 mb-4"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Search
      </button>
      {itemFound !== null && (
        <p className="mt-4">
          {itemFound ? "Item found!" : "Item not found."}
        </p>
      )}
      <br />
      <hr />
    </>
  );
};

export default CustomApp;
