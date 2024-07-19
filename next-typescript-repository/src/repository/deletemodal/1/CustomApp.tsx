"use client";
import React, { useState } from "react";
import Example from "./Example";

const CustomApp = () => {
  
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const handleDelete = () => {
        // Perform delete action
        // Close modal after deletion
        setIsDeleteModalOpen(false);
    };

  return (
    <>
      <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Delete Modal Example</h1>
      <button onClick={() => setIsDeleteModalOpen(true)} className="px-4 py-2 bg-red-500 text-white rounded-md focus:outline-none">
        Open Delete Modal
      </button>
      <Example
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onDelete={handleDelete}
      />
      </div>
    </>
  );
};

export default CustomApp;
