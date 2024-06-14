"use client";
import React, { useState } from "react";
import Wallpaper from "../../../assets/img/wallpaper.jpg";
import { FaHome, FaUser, FaBriefcase, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Example: React.FC = () => {
  return (
    <>
      <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Link href="/" className="mr-4">
          >
            <FaHome size={24} />
        </Link>
        <Link href="/about" className="mr-4">
          >
            <FaUser size={24} />
        </Link>
        <Link href="/portfolio" className="mr-4">
          >
            <FaBriefcase size={24} />
        </Link>
        <Link href="/contact"  className="mr-4">
            <FaEnvelope size={24} />
        </Link>
      </div>
    </nav>
    </>
  );
};

export default Example;
