"use client";
import React, { useState } from "react";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Example: React.FC<MyComponentProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <>
      <div className="max-w-sm mx-auto p-6 bg-clay shadow-clay-light rounded-xl">
        <div className="flex items-center justify-center mb-4">
          <img
            src={imageUrl}
            alt={title}
            className="w-24 h-24 rounded-full shadow-clay-dark"
          />
        </div>
        <h2 className="text-xl font-bold text-center text-gray-800">{title}</h2>
        <p className="text-gray-600 text-center mt-2">{description}</p>
      </div>
    </>
  );
};

export default Example;
