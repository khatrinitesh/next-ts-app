
"use client"
import React, { useState } from "react";


interface CardItem{
    title:string;
    desc:string;
}

interface CardProps{
    items:CardItem[]
}

const Example: React.FC<CardProps> = ({items}) => {

  return (
    <>
     {items.map((val,index)=> (
         <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
         <div className="px-6 py-4">
           <div className="font-bold text-xl mb-2">{val.title}</div>
           <p className="text-gray-700 text-base">{val.desc}</p>
         </div>
       </div>
     ))}
    </>
  );
};

export default Example;
