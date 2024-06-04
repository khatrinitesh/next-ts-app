"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

interface FeatureProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const Example: React.FC<FeatureProps> = ({ title, desc, icon }) => {
  return (
    <>
      <div className="flex items-center space-x-4 p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
        <div className="text-blue-500">{icon}</div>
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-600">{desc}</p>
        </div>
      </div>
    </>
  );
};

export default Example;
