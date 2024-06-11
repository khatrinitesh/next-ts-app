"use client"
import { log } from "console";
import React, { useState } from "react";

const CustomApp = () => {
    const num = 13.3714
    const result = num.toPrecision(4)

  return (
    <>
      {result}
      <br />
    </>
  );
};

export default CustomApp;
