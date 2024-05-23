"use client";
import React, { useEffect } from "react";
import Example from "./Example";

const CustomApp = () => {
    const buttons = [
        { label: 'Primary', onClick: () => alert('Primary button clicked'), variant: 'primary' },
        { label: 'Secondary', onClick: () => alert('Secondary button clicked'), variant: 'secondary' },
        { label: 'Danger', onClick: () => alert('Danger button clicked'), variant: 'danger' },
      ];
  return (
    <div className="flex justify-center items-center  bg-gray-100">
       <h1 className="text-3xl font-semibold text-center mb-4">Bullet List Example</h1>
        <Example buttons={buttons} />
    </div>
  );
};

export default CustomApp;
