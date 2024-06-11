"use client"
import { log } from "console";
import React, { useState } from "react";

const CustomApp = () => {
    const positiveInfinity  = Number.NEGATIVE_INFINITY;

    const result = 10 / 0;
    

  return (
    <>
      {result}
      <br />
    </>
  );
};

export default CustomApp;
