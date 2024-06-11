"use client"
import { log } from "console";
import React, { useState } from "react";

const CustomApp = () => {
    const str = 'apple,banana,grape,orange';
    // Split the string by comma or space
    const parts = str.substr(1,5);
  return (
    <>
      {parts}
      <br />
    </>
  );
};

export default CustomApp;
