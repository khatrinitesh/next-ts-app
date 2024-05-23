"use client";
import React, { useEffect } from "react";
import Example from "./Example";

const CustomApp = () => {
    const breadcrumbs:Breadcrumb[] = [
        {id:1,href:'/',label:'home'},
        {id:2,href:'/about',label:'about'},
        {id:3,href:'/service',label:'service'},
        {id:4,href:'/contact',label:'contact'},
    ]
  return (
    <div className="p-4">
        <h1 className="text-2xl font-bold">Breadcrumb Example</h1>
        <Example breadcrumbs={breadcrumbs} />
    </div>
  );
};

export default CustomApp;
