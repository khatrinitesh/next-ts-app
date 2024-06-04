"use client";
import React, { useState } from "react";
import Example from "./Example";
import { Transition } from '@headlessui/react';


interface Item {
    id: number;
    name: string;
  }

  const items: Item[] = [
    { id: 1, name: 'Hidden Item 1'},
    { id: 2, name: 'Hidden Item 2'},
    { id: 3, name: 'Hidden Item 3'},
    { id: 4, name: 'Hidden Item 4'},
  ];
  

const CustomApp = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');

    const handleSearchChange = (query: string) => {
        setSearchQuery(query.toLowerCase());
      };
    
      const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(searchQuery)
      );
  return (  
    <>
     <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Find Hidden Elements</h1>
        <Example onSearchChange={handleSearchChange} />
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
        {filteredItems.length === 0 && searchQuery !== '' && (
          <div className="py-2 px-4 text-gray-500">No items found</div>
        )}
      </div>
    </div>
    </>
  );
};

export default CustomApp;
