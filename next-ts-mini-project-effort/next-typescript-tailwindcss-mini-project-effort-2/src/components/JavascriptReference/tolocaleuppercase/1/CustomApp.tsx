"use client"
import { log } from "console";
import React, { useState } from "react";

const CustomApp = () => {
    const str = 'nitesh';
    // Split the string by comma or space
    const parts = str.toLocaleUpperCase(3,5);
  return (
    <>
      {parts}
      <br />
    </>
  );
};

export default CustomApp;
