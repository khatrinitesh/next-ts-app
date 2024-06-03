"use client"
import React, { useState } from "react";
import Example from "./Example";


const CustomApp = () => {

   // Set the target date in YYYY-MM-DDTHH:MM:SS format
   const targetDate = '2024-12-31T23:59:59';

  return (
    <div className="flex justify-center items-center h-screen">
      <Example targetDate={targetDate} />
    </div>
  );
};

export default CustomApp;
