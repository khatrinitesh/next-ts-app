"use client";
import React, { useEffect,useState } from "react";

interface DeleteModalProps{
    isOpen:boolean;
    onClose:() => void;
    onDelete:() => void;
}

const Example: React.FC<DeleteModalProps> = ({ isOpen,onClose,onDelete  }) => {
    const fruits = ['apple','pineapple','watermelon','strawberry']

    useEffect(() => {
        console.log(fruits);
        
    },[])
  return (
    <>
     {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen">
          <div className="fixed inset-0 bg-gray-500 opacity-75"></div>
          <div className="relative bg-white w-96 rounded-lg shadow-xl">
            <div className="p-8">
              <h2 className="text-lg font-semibold mb-4">Delete Confirmation</h2>
              <p className="mb-6">Are you sure you want to delete this item?</p>
              <div className="flex justify-end">
                <button
                  onClick={onClose}
                  className="px-4 py-2 mr-4 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-md focus:outline-none"
                >
                  Cancel
                </button>
                <button
                  onClick={onDelete}
                  className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md focus:outline-none"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
     )}
     <br />

     {fruits.length === 0 && 'there is no images'}
    </>
  );
};

export default Example;
