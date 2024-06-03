
"use client"
import React, { useState } from "react";


const Example: React.FC<> = ({}) => {
  return (
    <>
 <Layout>
      <h2 className="text-2xl font-bold">Dashboard</h2>
    </Layout>
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

    const getFullYear = new Date().getFullYear();
    return (
      <footer className="bg-gray-800 p-4 text-white text-center">
        &copy; 2024 Admin Dashboard
      </footer>
    );
  };


const Layout: React.FC = ({ children }) => {
    return (
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <main className="p-4">{children}</main>
          <Footer />
        </div>
      </div>
    );
  };
  