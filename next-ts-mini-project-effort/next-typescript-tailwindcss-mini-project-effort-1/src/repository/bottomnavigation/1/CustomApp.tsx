"use client";
import React, { useEffect } from "react";
import Example from "./Example";

const CustomApp = () => {
    const items = [
        {id:1,href:'/',label:'home'},
        {id:2,href:'/about',label:'about'},
        {id:3,href:'/service',label:'service'},
        {id:4,href:'/contact',label:'contact'},
    ]
  return (
    <div>
      <Example items={items} />
    </div>
  );
};

export default CustomApp;
