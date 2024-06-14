"use client";
import React, { useState } from "react";
import Example from "./Example";

const items = ["Item 1", "Item 2", "Item 3"];

const CustomApp = () => {
  const [index, setIndex] = useState(0);

  const onNxt = () => {
    if (index < items.length - 1) {
      setIndex(index + 1);
    }
  };

  const onPrv = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold mb-4">Items</h1>
        <p>{items[index]}</p>
        <Example
          onNext={onNxt}
          onPrev={onPrv}
          disabledNxt={index === items.length - 1}
          disabledPrv={index === 0}
        />
      </div>
    </>
  );
};

export default CustomApp;
