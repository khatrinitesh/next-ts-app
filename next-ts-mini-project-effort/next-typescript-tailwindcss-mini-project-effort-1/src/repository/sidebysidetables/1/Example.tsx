"use client";
import { useState, useEffect } from "react";
// LIBRARY
// INTERFACE
// STYLING
// import "./style.css";

const Example: React.FC = () => {
  return (
    <>
      <SideTables />
    </>
  );
};

export default Example;

const SideTables: React.FC = () => {
  

  return (
    <>
      <div className="flex">
      <div className="w-1/2 p-4">
        <h2 className="text-lg font-bold mb-4">Table 1</h2>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2">Header 1</th>
              <th className="border px-4 py-2">Header 2</th>
              <th className="border px-4 py-2">Header 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Row 1 Data 1</td>
              <td className="border px-4 py-2">Row 1 Data 2</td>
              <td className="border px-4 py-2">Row 1 Data 3</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Row 2 Data 1</td>
              <td className="border px-4 py-2">Row 2 Data 2</td>
              <td className="border px-4 py-2">Row 2 Data 3</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
      <div className="w-1/2 p-4">
        <h2 className="text-lg font-bold mb-4">Table 2</h2>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2">Header A</th>
              <th className="border px-4 py-2">Header B</th>
              <th className="border px-4 py-2">Header C</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Row A Data 1</td>
              <td className="border px-4 py-2">Row A Data 2</td>
              <td className="border px-4 py-2">Row A Data 3</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Row B Data 1</td>
              <td className="border px-4 py-2">Row B Data 2</td>
              <td className="border px-4 py-2">Row B Data 3</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};
