"use client"
import { log } from "console";
import React, { useState } from "react";

const CustomApp = () => {
    const str = 'Example ';
    const replacestr = str.replace('Example','Fantastic');
  return (
    <>
      {replacestr}
      <br />
    </>
  );
};

export default CustomApp;
