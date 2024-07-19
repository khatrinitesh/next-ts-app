
"use client"
import React, { useEffect,useState } from "react";

interface CouponProps {
    code: string;
    description: string;
  }

const Example: React.FC<CouponProps> = ({code,description}) => {
   
  return (
    <>
     <div className="bg-white border border-gray-300 p-4 rounded-md shadow-md flex flex-col items-center justify-center">
      <h3 className="text-xl font-semibold mb-2">Coupon Code: {code}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
    </>
  );
};

export default Example;
