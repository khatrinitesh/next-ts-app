"use client";
import React, { useState } from "react";
import Example from "./Example";
import { Transition } from '@headlessui/react';


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
  
    const filteredItems = filter
      ? items.filter(item => item.category === filter)
      : items;
  return (  
    <>
     <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Filterable List with Transition</h1>
        <Example onFilterChange={handleFilterChange} />
        <ul className="mt-4 space-y-2">
          {filteredItems.map(item => (
            <Transition
              key={item.id}
              show={true}
              enter="transition-opacity duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <li className="py-2 px-4 border-b border-gray-200">
                {item.name}
              </li>
            </Transition>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
};

export default CustomApp;
