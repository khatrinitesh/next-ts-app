"use client";
import React, { useState } from "react";
import Example from "./Example";


const CustomApp:React.FC<> = ({}) => {
    const handleClick = (type:string) => {
        console.log(`${type} button clicked`);
    }

  return (
    <>
      <Example type="primary" onClick={handleClick("primary")}/>
      <Example type="secondary" onClick={handleClick("secondary")}/>
      <Example type="warning" onClick={handleClick("warning")}/>
    </>
  );
};

export default CustomApp;
