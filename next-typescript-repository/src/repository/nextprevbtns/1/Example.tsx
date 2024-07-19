"use client";
import React, { useState } from "react";
import Wallpaper from "../../../assets/img/wallpaper.jpg";
// import './style.css';
import Link from "next/link";
import Image from "next/image";

interface NextPrevButtonProps{
    onNxt:() => void;
    onPrv:() => void;
    disabledNxt:boolean;
    disabledPrv:boolean;
}

const Example: React.FC<NextPrevButtonProps> = ({onNxt,onPrv,disabledNxt,disabledPrv}) => {
  return (
    <>
       <div className="flex justify-between">
      <button
        onClick={onPrv}
        disabled={disabledPrv}
        className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ${
          disabledPrv && "opacity-50 cursor-not-allowed"
        }`}
      >
        Prev
      </button>
      <button
        onClick={onNxt}
        disabled={disabledNxt}
        className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ${
          disabledNxt && "opacity-50 cursor-not-allowed"
        }`}
      >
        Next
      </button>
    </div>
    </>
  );
};

export default Example;
