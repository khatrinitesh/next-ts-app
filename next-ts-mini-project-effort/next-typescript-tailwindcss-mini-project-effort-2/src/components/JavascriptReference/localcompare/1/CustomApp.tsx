"use client"
import { log } from "console";
import React, { useState } from "react";

const CustomApp = () => {
    const str1 = 'apple'
    const str2 = 'banana'

    const result = str1.localeCompare(str2)

    if(result < 0){
        console.log(`${str1} comes before ${str2}`);
    } else if (result > 0) {
      console.log(`${str1} comes after ${str2}`);
    } else {
      console.log(`${str1} and ${str2} are the same`);
    }
    
  return (
    <>
      {result}
      <br />
    </>
  );
};

export default CustomApp;
