
"use client"
import React, { useState } from "react";



const Example: React.FC<> = ({}) => {

  return (
    <>
     <div className="flex justify-center items-center h-screen">
      <div
        className="border border-gray-300 p-4 rounded-md"
        contentEditable={true}
        style={{ minWidth: '200px', minHeight: '100px' }}
      >
        Start typing here...
      </div>
    </div>
    </>
  );
};

export default Example;
