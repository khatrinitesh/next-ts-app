"use client";
import React, { useState } from "react";
import { ItemListProps } from "./types";

const Example: React.FC<ItemListProps> = ({items}) => {
   
  return (
    <>
       <div className="wrapper flex flex-wrap justify-center space-x-4">
      {items.map(item => (
        <div key={item.id} className="box flex flex-col items-center mb-4 clearfix">
          <div className="thumb w-48 h-48 overflow-hidden flex items-center justify-center bg-gray-200 mb-2">
            <img src={item.imgSrc} alt={item.title} className="w-full h-full object-cover" />
          </div>
          <div className="caption">
            <h3 className="text-center text-lg font-semibold">{item.title}</h3>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Example;
