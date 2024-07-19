"use client";
import React, { useState } from "react";
import Example from "./Example";

const CustomApp = () => {

  return (  
    <>
     <h1 className="text-3xl font-bold mb-4">Folded Corner Effect with TailwindCSS</h1>
     <Example className="max-w-md mx-auto">
     <p>This box has a folded corner effect created with TailwindCSS and custom CSS.</p>
     </Example>
    </>
  );
};

export default CustomApp;
