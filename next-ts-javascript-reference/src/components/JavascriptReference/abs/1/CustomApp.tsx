"use client"
import { log } from "console";
import React, { useState } from "react";

const CustomApp = () => {
    const n1 = -10;
    const n2 = 2;

  return (
    <>
      {Math.abs(n1)} / {Math.abs(n2)}
      <br />
    </>
  );
};

export default CustomApp;
