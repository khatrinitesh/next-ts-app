"use client"
import { log } from "console";
import React, { useState } from "react";

const CustomApp = () => {
    const num = 1.2222
    const result = num.toLocaleString()

  return (
    <>
      {result}
      <br />
    </>
  );
};

export default CustomApp;
