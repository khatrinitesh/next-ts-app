"use client";
import React, { useState } from "react";
import Example from "./Example";
import { MailIcon, UserIcon, LockClosedIcon } from '@heroicons/react/solid';

const CustomApp = () => {

  return (  
    <>
     <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
     <Example />
    </>
  );
};

export default CustomApp;
