"use client"
import React, { useState } from "react";
import Example from "./Example";


const items:CardItem[] = [
    {
        id:1,title:'head 1',desc:'Culpa laborum occaecat sint sunt nostrud voluptate qui veniam pariatur labore amet.'
    },
    {
        id:2,title:'head 2',desc:'Culpa laborum occaecat sint sunt nostrud voluptate qui veniam pariatur labore amet.'
    }, 
    {
        id:2,title:'head 3',desc:'Culpa laborum occaecat sint sunt nostrud voluptate qui veniam pariatur labore amet.'
    }, 
    {
        id:4,title:'head 4',desc:'Culpa laborum occaecat sint sunt nostrud voluptate qui veniam pariatur labore amet.'
    }, 
]

const CustomApp = () => {

  
  return (
    <div className="flex justify-center items-center h-screen">
      <Example items={items}/>
    </div>
  );
};

export default CustomApp;
