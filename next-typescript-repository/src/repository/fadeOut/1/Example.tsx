"use client";
import React, { useEffect, useState } from "react";
import Link from 'next/link';

const Example: React.FC<> = ({}) => {
  
  return (
    <>
     <div className="animate-fadeOut">
      <h1 className="text-2xl font-bold">Hello, World!</h1>
      <p>This content will fade out.</p>
    </div>
    </>
  );
};

export default Example;
