
"use client"
import React, { useState } from "react";


const Example: React.FC<> = ({}) => {
  return (
    <>

    </>
  );
};

export default Example;

const Header:React.FC  =() => {
    return(
        <>
         <header className="bg-gray-800 p-4">
      <h1 className="text-white text-2xl font-bold">Admin Dashboard</h1>
    </header>
        </>
    )
}

const Sidebar:React.FC  =() => {
    return(
        <>
          <aside className="bg-gray-900 p-4 text-white w-64">
      <ul>
        <li>Dashboard</li>
        <li>Analytics</li>
        <li>Settings</li>
      </ul>
    </aside>
        </>
    )
}


const Footer: React.FC = () => {

    const getFullYear = new DAte()
    return (
      <footer className="bg-gray-800 p-4 text-white text-center">
        &copy; 2024 Admin Dashboard
      </footer>
    );
  };