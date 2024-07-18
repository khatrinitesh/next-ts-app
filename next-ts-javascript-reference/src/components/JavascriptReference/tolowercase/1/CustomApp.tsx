"use client"
import { log } from "console";
import React, { useState } from "react";

const CustomApp = () => {
    const str = 'NITESH';
    // Split the string by comma or space
    const parts = str.toLowerCase();
  return (
    <>
      {parts}
      <br />
    </>
  );
};

export default CustomApp;
