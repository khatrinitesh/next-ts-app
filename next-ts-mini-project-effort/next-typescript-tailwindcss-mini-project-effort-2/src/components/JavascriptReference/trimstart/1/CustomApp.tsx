"use client"
import { log } from "console";
import React, { useState } from "react";

const CustomApp = () => {
    const str = 'NITESH  KHATRI';
    // Split the string by comma or space
    const parts = str.trimStart();
  return (
    <>
      {parts}
      <br />
    </>
  );
};

export default CustomApp;
