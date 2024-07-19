"use client";
import React, { ReactNode,useEffect, useState } from "react";
import './style.css';
import Link from "next/link";
import Image from "next/image";





const Example:React.FC<FoldedCornerProps> = ({children,className}) => {
  return (
    <>
     <div className={`folded-corner p-6 bg-blue-500 text-white relative ${className}`}>
      {children}
    </div>
    </>
  );
};

export default Example;
