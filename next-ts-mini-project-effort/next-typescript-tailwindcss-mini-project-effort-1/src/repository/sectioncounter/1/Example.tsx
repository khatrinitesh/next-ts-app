'use client'
import {useState,useEffect} from 'react';
import { SearchProps, SectionCounterProps } from './interface';

const Example:React.FC = () => {
     // Example sections data
  const sections = [
    { id: 1, title: 'Section 1', count: 10 },
    { id: 2, title: 'Section 2', count: 15 },
    { id: 3, title: 'Section 3', count: 8 },
    // Add more sections as needed
  ];

    
  return (
    <>
        <SectionCounter  sections={sections} />
    </>
  )
}

export default Example

const SectionCounter:React.FC<SectionCounterProps> = ({sections}) => {

    return(
        <>
        <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Section Counter</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sections.map(section => (
          <div key={section.id} className="bg-white shadow-md rounded-md p-4 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">{section.title}</h2>
              <p className="text-gray-600">{section.count}</p>
            </div>
            <div className="bg-gray-200 rounded-md p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
        </>
    )
}