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
        { id: 6, name: 'Item 6', desc: 'This is item 6' },
        { id: 7, name: 'Item 7', desc: 'This is item 7' },
        { id: 8, name: 'Item 8', desc: 'This is item 8' },
        { id: 9, name: 'Item 9', desc: 'This is item 9' },
        { id: 10, name: 'Item 10', desc: 'This is item 10' },
        { id: 11, name: 'Item 11', desc: 'This is item 11' },
        { id: 12, name: 'Item 12', desc: 'This is item 12' },
        { id: 13, name: 'Item 13', desc: 'This is item 13' },
        { id: 14, name: 'Item 14', desc: 'This is item 14' },
        { id: 15, name: 'Item 15', desc: 'This is item 15' },
        { id: 16, name: 'Item 16', desc: 'This is item 16' },
        { id: 17, name: 'Item 17', desc: 'This is item 17' },
        { id: 18, name: 'Item 18', desc: 'This is item 18' },
        { id: 19, name: 'Item 19', desc: 'This is item 19' },
        { id: 20, name: 'Item 110', desc: 'This is item 20' },
      ];
    
  return (
    <>
    <Example items={items} />
    </>
  );
};

export default CustomApp;
