"use client";
import React, { useState } from "react";
import Example from "./Example";


interface Item {
    id: number;
    name: string;
    category: string;
  }

  const items: Item[] = [
    { id: 1, name: 'Item 1', category: 'category1' },
    { id: 2, name: 'Item 2', category: 'category2' },
    { id: 3, name: 'Item 3', category: 'category3' },
    { id: 4, name: 'Item 4', category: 'category1' },
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
        <h1 className="text-2xl font-bold mb-4">Filterable Table</h1>
        <Example onFilterChange={handleFilterChange} />
        <table className="min-w-full mt-4 divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredItems.map(item => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default CustomApp;
