"use client"
import { log } from "console";
import React, { useState } from "react";

const CustomApp = () => {
    const fname = 'sachin'
    const lname = 'tendulkar'
    const fullname = fname + ' ' + lname 
  return (
    <>
      {fullname}
    </>
  );
};

export default CustomApp;
