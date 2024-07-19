"use client";
import React, { useState } from "react";
import Example from "./Example";
import Wallpaper from "../../../assets/img/wallpaper.jpg";

const CustomApp = () => {
    const items = [
        { id: 1, name: 'Item 1', desc: 'This is item 1' },
        { id: 2, name: 'Item 2', desc: 'This is item 2' },
        { id: 3, name: 'Item 3', desc: 'This is item 3' },
        { id: 4, name: 'Item 4', desc: 'This is item 4' },
        { id: 5, name: 'Item 5', desc: 'This is item 5' },
      ];
    
  return (
    <>
    <Example items={items} />
    </>
  );
};

export default CustomApp;
