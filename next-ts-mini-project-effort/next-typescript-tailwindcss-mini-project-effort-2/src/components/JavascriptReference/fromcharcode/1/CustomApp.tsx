"use client"
import { log } from "console";
import React, { useState } from "react";

const CustomApp = () => {
    const char1 = String.fromCharCode(72); // Unicode value for 'H'
    const char2 = String.fromCharCode(101); // Unicode value for 'e'
    const char3 = String.fromCharCode(108); // Unicode value for 'l'
    const char4 = String.fromCharCode(108); // Unicode value for 'l'
    const char5 = String.fromCharCode(111); // Unicode value for 'o'
    const char6 = String.fromCharCode(500)

    const str = char1 + char2 + char3 + char4 + char5;
    
  return (
    <>
      {str}
      <br />
      {char6}
    </>
  );
};

export default CustomApp;
