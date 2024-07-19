"use client";
// custom hooks - state management
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";
// LIBRARY
import ReactPlayer from 'react-player';
// NEXT/IMAGE
import Image from "next/image";
// NEXT/LINK
import Link from "next/link";
// WALLPAPER
import Wallpaper from "../../../assets/img/wallpaper.jpg";
// // STYLINGCSS
// import "./style.css";
// INTERFACE

// CONSTANTS

const Example = () => {
      // Example data for the comparison table
  const comparisonData = [
    { feature: 'Feature 1', product1: 'Value A', product2: 'Value X' },
    { feature: 'Feature 2', product1: 'Value B', product2: 'Value Y' },
    { feature: 'Feature 3', product1: 'Value C', product2: 'Value Z' },
  ];
      
  return (
    <>
    <ComparisonTableComponent data={comparisonData} />
    </>
  );
};

export default Example;

interface ComparisonTableProps {
    data: {
      feature: string;
      product1: string | number;
      product2: string | number;
    }[];
  }

const ComparisonTableComponent:React.FC<ComparisonTableProps> = ({data}) => {
    return(
        <>
          <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Comparison Table Example</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Feature
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product 1
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product 2
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {item.feature}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.product1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.product2}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
        </>
    )
}