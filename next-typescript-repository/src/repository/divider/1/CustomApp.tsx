"use client";
import React, { useState } from "react";
import Example from "./Example";

const CustomApp = () => {
  return (  
    <>
     <h1 className="text-2xl font-bold mb-4">Divider</h1>
     <p>This is some content above the divider.</p>
     <Example/>
     <p>This is some content above the divider.</p>
    </>
  );
};

export default CustomApp;
