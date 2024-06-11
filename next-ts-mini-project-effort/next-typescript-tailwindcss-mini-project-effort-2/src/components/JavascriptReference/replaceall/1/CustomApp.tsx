"use client"
import { log } from "console";
import React, { useState } from "react";

const CustomApp = () => {
    const str = 'Example  is happy, Example is sad, Example is happy';
    const replacestr = str.replaceAll(/happy/g,'Fantastic');
  return (
    <>
      {replacestr}
      <br />
    </>
  );
};

export default CustomApp;
