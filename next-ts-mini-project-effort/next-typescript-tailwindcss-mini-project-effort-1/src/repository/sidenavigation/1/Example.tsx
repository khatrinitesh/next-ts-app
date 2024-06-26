"use client";
import { useState, useEffect } from "react";
// LIBRARY
// INTERFACE
// STYLING
// import "./style.css";

const Example: React.FC = () => {
  return (
    <>
      <SideNavigation />
    </>
  );
};

export default Example;

const SideNavigation: React.FC = () => {
  

  return (
    <>
    <div className="flex h-screen bg-gray-200">
      {/* Sidebar */}
      <div className="bg-gray-800 w-64 flex-shrink-0">
        <div className="p-4">
          <h2 className="text-white text-lg font-semibold">Sidebar Title</h2>
        </div>
        <nav>
          <ul className="space-y-2">
            <li>
              <a href="#" className="block p-4 text-white hover:bg-gray-700">Link 1</a>
            </li>
            <li>
              <a href="#" className="block p-4 text-white hover:bg-gray-700">Link 2</a>
            </li>
            <li>
              <a href="#" className="block p-4 text-white hover:bg-gray-700">Link 3</a>
            </li>
            {/* Add more navigation links as needed */}
          </ul>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1">
        <div className="p-4">
          <h2 className="text-gray-800 text-lg font-semibold">Main Content</h2>
          <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
    </>
  );
};
