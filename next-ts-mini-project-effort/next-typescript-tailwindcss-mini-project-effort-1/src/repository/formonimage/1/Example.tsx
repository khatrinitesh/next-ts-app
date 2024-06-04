"use client";
import React, { ReactNode,useEffect, useState } from "react";
// import './style.css';
import Link from "next/link";
import Image from "next/image";
import Wallpaper from "../../../assets/img/wallpaper.jpg";


const Example:React.FC<> = ({}) => {
  return (
    <>
      <div className="relative">
      <Image
        src={Wallpaper} // Replace with the path to your image
        alt="Background"
        className="w-full h-auto"
      />
      <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">Name</label>
          <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">Email</label>
          <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-semibold mb-1">Message</label>
          <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded"></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600">Submit</button>
      </form>
    </div>
    </>
  );
};

export default Example;
