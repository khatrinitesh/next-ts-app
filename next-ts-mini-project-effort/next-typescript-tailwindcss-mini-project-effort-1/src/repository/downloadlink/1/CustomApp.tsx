"use client";
import React, { useState } from "react";
import Example from "./Example";

const CustomApp = () => {

    const downloadUrl = "../../../style/";
    const fileName = "global.css";
  return (  
    <>
     <h1 className="text-2xl font-bold mb-4">Download link</h1>
     <Example url={downloadUrl} fileName={fileName}/>
    </>
  );
};

export default CustomApp;
