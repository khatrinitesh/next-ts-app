"use client";
import React, { useState } from "react";
import Wallpaper from "../../../assets/img/wallpaper.jpg";
// import './style.css';
import Link from "next/link";
import Image from "next/image";

interface BtnProps {
  type: "primary" | "secondary" | "warning";
  onClick: () => void;
}

const Example: React.FC<BtnProps> = ({ type, onClick }) => {
  let btnStyle = "border border-solid rounded py-2 px-4 focus:outline-none ";
  if (type === "primary") {
    btnStyle +=
      "border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white";
  } else if (type === "secondary") {
    btnStyle +=
      "border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white";
  } else if (type === "warning") {
    btnStyle += "border-red-500 text-red-500 hover:bg-red-500 hover:text-white";
  }
  return (
    <>
      <button className={btnStyle} onClick={onClick}>
        {type}
      </button>
    </>
  );
};

export default Example;
