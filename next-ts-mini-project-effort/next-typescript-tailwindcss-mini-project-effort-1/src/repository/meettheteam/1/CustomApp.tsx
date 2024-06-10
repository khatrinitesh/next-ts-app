"use client";
import React, { useState } from "react";
import Example from "./Example";
import Wallpaper from "../../../assets/img/wallpaper.jpg";
import { teamMembers } from "./TeamMembers";


const CustomApp = () => {
    
  return (
    <>
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Meet the Team</h2>
        <div className="flex flex-wrap -mx-4">
          {teamMembers.map((member: TeamMember, index: number) => (
            <Example key={index} member={member} />
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default CustomApp;
