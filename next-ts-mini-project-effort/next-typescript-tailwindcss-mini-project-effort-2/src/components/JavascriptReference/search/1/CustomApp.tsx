"use client"
import { log } from "console";
import React, { useState } from "react";

const CustomApp = () => {
    const str = 'The quick brown fox jumps over the lazy dog';
    const position = str.search(/\bq\wik\b/)
  return (
    <>
      {position}
      <br />
    </>
  );
};

export default CustomApp;
