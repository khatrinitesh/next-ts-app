"use client";
import React, { useEffect, useState } from "react";

interface ColumnProps {
    title: string;
    content: string;
  }

  interface EqualHeightColumnsProps {
    columns: ColumnProps[];
  }

const Example: React.FC<EqualHeightColumnsProps> = ({columns}) => {
  

  return (
    <>
     <div className="flex flex-wrap -mx-2">
     {columns.map((column, index) => (
       <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
         <div className="bg-white p-4 h-full flex flex-col rounded shadow">
           <h2 className="text-xl font-semibold mb-2">{column.title}</h2>
           <p className="flex-grow">{column.content}</p>
         </div>
       </div>
     ))}
   </div>
    </>
  );
};

export default Example;
