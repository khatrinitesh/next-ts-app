"use client"
import { log } from "console";
import React, { useState } from "react";

const CustomApp = () => {
    const n1 = 4.3;
    const n2 = 2.8;

  return (
    <>
      {Math.ceil(n1)} / {Math.ceil(n2)}
      <br />
    </>
  );
};

export default CustomApp;
