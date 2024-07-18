"use client"
import { log } from "console";
import React, { useState } from "react";

const CustomApp = () => {
    // const result = NaN + 5;

    const result = 9999;
    if(isNaN(result)){
        console.log('The result is not a number (NaN)');
    } else {
      console.log('The result is a number');
    }

  return (
    <>
      {result}
      <br />
    </>
  );
};

export default CustomApp;
