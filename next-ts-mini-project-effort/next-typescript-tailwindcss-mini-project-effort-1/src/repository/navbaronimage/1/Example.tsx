"use client";
import React, { useState } from "react";
import Image from "next/image";
import Layout from "./Layout";
import Wallpaper from "../../../assets/img/wallpaper.jpg";

const Example: React.FC = () => {
  return (
    <>
      <Layout>
        <div className="relative h-screen">
          <Image
            src={Wallpaper}
            alt="Background"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <h1 className="text-4xl font-bold text-white">Welcome</h1>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Example;
