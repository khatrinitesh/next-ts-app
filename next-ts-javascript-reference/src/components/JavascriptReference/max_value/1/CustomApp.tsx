"use client"
import { log } from "console";
import React, { useState } from "react";

const CustomApp = () => {
    const numbers = [3, 7, 2, 9, 5];
    const maxNumbers = Math.max(...numbers);
  return (
    <>
      {maxNumbers}
      <br />
    </>
  );
};

export default CustomApp;
