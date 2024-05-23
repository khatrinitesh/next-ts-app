"use client";
import React, { useEffect } from "react";
import Example from "./Example";

const CustomApp = () => {
  return (
    <div>
      <Example src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="wallpaper" alt="Example Image"
        borderColor="blue"
        borderWidth="4px"
        borderRadius="rounded-lg"/>
    </div>
  );
};

export default CustomApp;
