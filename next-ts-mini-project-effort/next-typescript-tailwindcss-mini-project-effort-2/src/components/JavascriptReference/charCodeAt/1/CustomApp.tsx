"use client"
import { log } from "console";
import React, { useState } from "react";

const CustomApp = () => {
 const str =  'nitesh'
 const unicodevalue = str.charCodeAt(0);
 for(let i=0;i<str.length;i++){
    const unicoderesult = str.charCodeAt(i);
    console.log(`Character '${str[i]}' has Unicode value ${unicodevalue}`);
 }

  return (
    <>
      {unicodevalue}
    </>
  );
};

export default CustomApp;
