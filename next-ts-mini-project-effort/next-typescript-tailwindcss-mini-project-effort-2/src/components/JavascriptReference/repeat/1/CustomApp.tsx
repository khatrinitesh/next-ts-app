"use client"
import { log } from "console";
import React, { useState } from "react";

const CustomApp = () => {
    const str = 'Example ';
    const repeatstr = str.repeat(5);
  return (
    <>
      {repeatstr}
      <br />
    </>
  );
};

export default CustomApp;
