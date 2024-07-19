"use client";
import React, { useState } from "react";

interface ClosableListItemProps {
  id: number;
  text: string;
  onClose: (id: number) => void;
}

interface ClosableListProps {
  initialItems: { id: number; text: string }[];
}

const Example: React.FC<ClosableListProps> = ({ initialItems }) => {
  const [items, setItems] = useState(initialItems);

  const handleRemove = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <>
      <div className="max-w-md mx-auto mt-8">
        {items.map((item) => (
          <ClosableListItem
            key={item.id}
            id={item.id}
            text={item.text}
            onClose={handleRemove}
          />
        ))}
      </div>
    </>
  );
};

export default Example;

const ClosableListItem: React.FC<ClosableListItemProps> = ({
  id,
  text,
  onClose,
}) => {
  return (
    <div className="flex items-center justify-between p-2 bg-white rounded shadow mb-2">
      <span>{text}</span>
      <button
        onClick={() => onClose(id)}
        className="ml-4 p-1 text-red-500 hover:text-red-700"
      >
        &times;
      </button>
    </div>
  );
};
