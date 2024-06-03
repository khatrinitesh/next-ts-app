"use client";
import React, { useState } from "react";
import Example from "./Example";

const CustomApp = () => {

    const columns = [
        { title: 'Column 1', content: 'Content for column 1' },
        { title: 'Column 2', content: 'Content for column 2' },
        { title: 'Column 3', content: 'Content for column 3' },
    ];

  return (  
    <>
     <Example columns={columns}/>
    </>
  );
};

export default CustomApp;
