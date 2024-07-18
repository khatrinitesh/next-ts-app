"use client"
import React from "react";

//define an interface for the array elements
interface Item{
    id:number;
    name:string;
}

const CustomApp = () => {

    // initialize an empty array
 const items:Item[] = [];


 // fill the array with default values
 const fillArray = () => {
    const defaultItem:Item = {
        id:0,
        name:'Default'
    }
    const filledArray = new Array(5).fill(defaultItem);
    console.log(filledArray);
    
 }

  return (
    <>
      <button onClick={fillArray}>Fill Array</button>
    </>
  );
};

export default CustomApp;
