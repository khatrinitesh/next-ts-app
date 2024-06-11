'use client'
import React,{useState} from 'react';
import { Person } from './interface';

const data:Person[] = [
    { name: 'John', age: 25, score: 90 },
    { name: 'Alice', age: 30, score: 85 },
    { name: 'Bob', age: 28, score: 95 },
]

const CustomApp = () => {
   
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [sortBy, setSortBy] = useState<keyof Person>('name');

  const sortedData = data.slice().sort((a, b) => {
    if (sortOrder === 'asc') {
      return a[sortBy] - b[sortBy];
    } else {
      return b[sortBy] - a[sortBy];
    }
  });

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };
    
  return (
    <>
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th className="px-4 py-2" onClick={() => { setSortBy('name'); toggleSortOrder(); }}>
            Name {sortBy === 'name' && <span>{sortOrder === 'asc' ? '▲' : '▼'}</span>}
          </th>
          <th className="px-4 py-2" onClick={() => { setSortBy('age'); toggleSortOrder(); }}>
            Age {sortBy === 'age' && <span>{sortOrder === 'asc' ? '▲' : '▼'}</span>}
          </th>
          <th className="px-4 py-2" onClick={() => { setSortBy('score'); toggleSortOrder(); }}>
            Score {sortBy === 'score' && <span>{sortOrder === 'asc' ? '▲' : '▼'}</span>}
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((person, index) => (
          <tr key={index}>
            <td className="border px-4 py-2">{person.name}</td>
            <td className="border px-4 py-2">{person.age}</td>
            <td className="border px-4 py-2">{person.score}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  )
}

export default CustomApp