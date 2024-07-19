"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

interface SearchProps  {
    onSearchChange: (query: string) => void;
}

const Example: React.FC<SearchProps> = ({ onSearchChange }) => {
    const handleInputChange  = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onSearchChange(event.target.value);
      };

  return (
    <>
      <div className="flex items-center space-x-4">
      <label htmlFor="search" className="text-sm font-medium text-gray-700">
        Search:
      </label>
      <input
        type="text"
        id="search"
        onChange={handleInputChange}
        className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        placeholder="Type to search..."
      />
    </div>
    </>
  );
};

export default Example;
