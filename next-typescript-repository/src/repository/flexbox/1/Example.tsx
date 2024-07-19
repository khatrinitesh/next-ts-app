"use client";
import React, { ReactNode,useEffect, useState } from "react";
import Link from "next/link";


interface FlexboxLayoutProps {
    children: ReactNode;
  }

const Example:React.FC<FlexboxLayoutProps> = ({children}) => {
  return (
    <>
     <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl">My Flexbox Layout</h1>
      </header>
      <div className="flex flex-1">
        <aside className="w-64 bg-gray-200 p-4">
          <nav>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-blue-500 hover:text-blue-700">Link 1</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-blue-500 hover:text-blue-700">Link 2</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-blue-500 hover:text-blue-700">Link 3</a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:text-blue-700">Link 4</a>
              </li>
            </ul>
          </nav>
        </aside>
        <main className="flex-1 bg-white p-6">
          {children}
        </main>
      </div>
      <footer className="bg-gray-800 text-white p-4 text-center">
        &copy; {new Date().getFullYear()} My Website
      </footer>
    </div>
    </>
  );
};

export default Example;
