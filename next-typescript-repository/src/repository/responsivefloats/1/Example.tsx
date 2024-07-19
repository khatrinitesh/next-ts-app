"use client";
// custom hooks - state management
import React, { useState, useEffect, useRef } from "react";
// library
// next image
import Image from "next/image";
// interface

// constants

const Example = () => {
  return (
    <>
    <ResponsiveFloatComponent/>
    </>
  );
};

export default Example;

const ResponsiveFloatComponent: React.FC<> = ({}) => {
   
  return (
    <>
      <div className="max-w-screen-xl mx-auto p-4">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
          <div className="bg-gray-200 p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Item 1</h2>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
          <div className="bg-gray-200 p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Item 2</h2>
            <p className="text-gray-600">Pellentesque euismod semper augue, sit amet pellentesque ipsum placerat non.</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
          <div className="bg-gray-200 p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Item 3</h2>
            <p className="text-gray-600">Vestibulum rutrum elit eu lectus ultrices, et ultrices lorem facilisis.</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
          <div className="bg-gray-200 p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Item 4</h2>
            <p className="text-gray-600">Quisque bibendum sapien vitae velit laoreet, sed feugiat ligula eleifend.</p>
          </div>
        </div>
        {/* Add more items as needed */}
      </div>
    </div>
    </>
  )
};
