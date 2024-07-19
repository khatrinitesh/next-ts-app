"use client";
import React, { useState } from "react";
import Example from "./Example";

const items = [
    { id: 1, name: 'Item 1', category: 'filter1' },
    { id: 2, name: 'Item 2', category: 'filter2' },
    { id: 3, name: 'Item 3', category: 'filter3' },
    { id: 4, name: 'Item 4', category: 'filter1' },
  ];

const CustomApp = () => {
    const [filter, setFilter] = useState<string>('');

    const handleFilterChange = (newFilter: string) => {
      setFilter(newFilter);
    };
  
    const filteredItems = filter ? items.filter(item => item.category === filter) : items;
    
  return (  
    <>
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Filterable List</h1>
        <Example onFilterChange={handleFilterChange} />
        <ul className="mt-4">
          {filteredItems.map(item => (
            <li key={item.id} className="py-2 px-4 border-b border-gray-200">
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
};

export default CustomApp;
