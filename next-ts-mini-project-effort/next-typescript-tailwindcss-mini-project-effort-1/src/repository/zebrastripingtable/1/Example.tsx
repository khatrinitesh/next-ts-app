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
      
    const tabledata:TableData[] = [
        {id:1,name:'sachin',age:34},
        {id:2,name:'rahul',age:41},
        {id:3,name:'sourav',age:33},
        {id:4,name:'yurvaj',age:31},
        {id:5,name:'dhoni',age:28},
        {id:6,name:'zaheer',age:36},
    ]
  return (
    <>
    <ZebraStripingTable data={tabledata}/>
    </>
  );
};

export default Example;
// Example interface for table data
interface TableData {
    id: number;
    name: string;
    age: number;
  }
  
  interface TableProps {
    data: TableData[];
  }

const ZebraStripingTable:React.FC<TableProps> = ({data}) => {
    return(
        <>
         <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Zebra Striped Table Example</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                Age
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item, index) => (
              <tr key={item.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {item.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.age}
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