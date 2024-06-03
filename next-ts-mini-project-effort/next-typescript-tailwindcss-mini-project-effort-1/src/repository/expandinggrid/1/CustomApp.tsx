"use client";
import React, { useState } from "react";
import Example from "./Example";

const CustomApp = () => {
    const items = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`);


  return (  
    <>
     <Example items={items} />
    </>
  );
};

export default CustomApp;
