"use client";
import React, { useState } from "react";
import { Item } from "./interface";

const CustomApp: React.FC = () => {

    const item:Item = {
        id:1,
        name:'Apple',
        price:1.5
    }

  return (
    <>
      <h3 className="text-2xl font-bold mb-4">Item Details</h3>
      <ul className="list-disc pl-5">
        {Object.keys(item).map((key) => (
            <li key={key}>
                <span className="font-semibold">{key}</span>: {(item as any)[key]}
            </li>
        ))}
      </ul>
      <br />
      <hr />
    </>
  );
};

export default CustomApp;
