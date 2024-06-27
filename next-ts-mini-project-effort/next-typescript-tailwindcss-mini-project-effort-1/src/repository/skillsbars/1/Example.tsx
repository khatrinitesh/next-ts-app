"use client";
import { useState, useEffect } from "react";
import { skillsData } from "./constants";
// LIBRARY

// INTERFACE
// STYLING
// import "./style.css";

const Example: React.FC = () => {
  return (
    <>
      <SkillBarsComponent />
    </>
  );
};

export default Example;

const SkillBarsComponent: React.FC = () => {
  
 

  return (
    <>
   <div className="max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Skills</h2>
      {skillsData.map((item, index) => (
        <div key={index} className="mb-4">
          <p className="text-sm font-semibold">{item.skill}</p>
          <div className="bg-gray-200 h-3 rounded-full overflow-hidden mt-1">
            <div
              className="bg-blue-500 h-full"
              style={{ width: `${item.level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>

    </>
  );
};
