"use client";
import React, { useState } from "react";
import Example from "./Example";

const CustomApp = () => {

    const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];
    const contents = [
      <div key="1">Content for Tab 1</div>,
      <div key="2">Content for Tab 2</div>,
      <div key="3">Content for Tab 3</div>,
    ];
    
  return (
    <>
    <Example tabs={tabs} contents={contents}/>
    </>
  );
};

export default CustomApp;
