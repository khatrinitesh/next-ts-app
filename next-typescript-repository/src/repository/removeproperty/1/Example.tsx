"use client";
// custom hooks - state management
import React, { useState, useEffect, useRef } from "react";
// library
// next image
import Image from "next/image";
// interface

// constants

const Example = () => {
  return (
    <>
    <RemoveComponent/>
    </>
  );
};

export default Example;

interface Item{
    id:number;
    name:string;
}

const RemoveComponent: React.FC<> = ({}) => {
    const [items,setItems] = useState<Item[]>([
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
    ]);

    const handleRemove = (id:number) => {
        // Filter out the item with the matching ID
        const updatedItems  = items.filter((val) => val.id !== id);
        setItems(updatedItems )
    }
  return (
    <>
     <h2 className="font-bold text-[32px]">Items List</h2>
      <ul className="gap-4 inline-flex">
        {items.map(item => (
          <li key={item.id}>
            <span className="inline-block me-3">{item.name}</span>
            <button className="bg-orange-700 text-white rounded px-5 py-2" onClick={() => handleRemove(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </>
  )
};
