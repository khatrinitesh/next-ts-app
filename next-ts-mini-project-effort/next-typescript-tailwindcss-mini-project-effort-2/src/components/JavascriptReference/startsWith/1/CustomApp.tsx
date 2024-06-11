"use client"
import { log } from "console";
import React, { useState } from "react";

const CustomApp = () => {
    const word = 'hello world'
    const finalresult = word.startsWith('h')
  return (
    <>
      {finalresult.toString()}
    </>
  );
};

export default CustomApp;
