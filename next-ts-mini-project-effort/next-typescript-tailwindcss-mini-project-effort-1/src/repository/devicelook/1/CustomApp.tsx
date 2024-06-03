"use client";
import React, { useState } from "react";
import Example from "./Example";
import { useRouter } from "next/navigation";

const CustomApp = () => {

    const router = useRouter();
    const { asPath } = router;
    const userAgent = navigator.userAgent;
  
   
  return (
    <>
      <div className="container mx-auto p-4">
      <Example userAgent={userAgent}
      />
      <h1 className="text-2xl font-bold mb-4">Device Information</h1>
      </div>
    </>
  );
};

export default CustomApp;
