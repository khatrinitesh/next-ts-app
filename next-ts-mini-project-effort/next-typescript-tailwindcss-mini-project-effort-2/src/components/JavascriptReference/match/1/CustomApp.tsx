"use client"
import { log } from "console";
import React, { useState } from "react";

const CustomApp = () => {
    const str = 'The quick brown fox jumps over the lazy dog';
    const matches = str.match(/o./g);
  return (
    <>
      {matches}
      <br />
    </>
  );
};

export default CustomApp;
