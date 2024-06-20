"use client"
import React, { useState ,useEffect } from "react";
import Image from "next/image";
// constants
import { features  } from "./constants";

const Example = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {features.map((feature) => (
          <FeaturesComp key={feature.id} feature={feature} />
        ))}
      </div>
    </>
  )
};

export default Example;

const FeaturesComp: React.FC<> = ({ feature }) => {
  return (
    <>
      <div className="relative p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
      <div className="absolute inset-0 bg-blue-500 opacity-25 rounded-lg"></div>
      <div className="absolute left-0 bottom-0 w-3/4 h-1 bg-blue-500"></div>
    </div>
    </>
  );
};
