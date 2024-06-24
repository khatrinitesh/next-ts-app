"use client";
// custom hooks - state management
import React, { useState, useEffect, useRef } from "react";
// library
// next image
import Image from "next/image";
import Link from "next/link";
// interface
import Wallpaper from "../../../assets/img/wallpaper.jpg";
import { TableProps } from "./interface";
import { TABLE_DATA } from "./constants";

// constants


const Example = () => {
  return (
    <>
    <TableExample tablecell={TABLE_DATA}/>
    </>
  )
};

export default Example;

const TableExample: React.FC<TableProps> = ({ tablecell }) => {
  return (
    <>
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Table Example</h2>
        <table className="min-w-full bg-white border-gray-200 shadow-md rounded-md overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border-b border-gray-200">ID</th>
              <th className="px-4 py-2 border-b border-gray-200">Name</th>
              <th className="px-4 py-2 border-b border-gray-200">Age</th>
            </tr>
          </thead>
          <tbody>
            {tablecell.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b border-gray-200">
                  {item.id}
                </td>
                <td className="px-4 py-2 border-b border-gray-200">
                  {item.name}
                </td>
                <td className="px-4 py-2 border-b border-gray-200">
                  {item.age}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
