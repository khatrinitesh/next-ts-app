"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

interface FilterProps {
  onFilterChange: (filter: string) => void;
}

const Example: React.FC<Filterprops> = ({ onFilterChange }) => {
    const [selectedFilter, setSelectedFilter] = useState<string>('');

    const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const newFilter = event.target.value;
      setSelectedFilter(newFilter);
      onFilterChange(newFilter);
    };

  return (
    <>
      <div className="flex items-center space-x-4">
        <label htmlFor="filter" className="text-sm font-medium text-gray-700">
          Filter by Category:
        </label>
        <select
          id="filter"
          onChange={handleFilterChange}
          className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="">All</option>
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
          <option value="category3">Category 3</option>
        </select>
      </div>
    </>
  );
};

export default Example;
