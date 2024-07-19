"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";



const Example:React.FC = () => {
  return (
    <>
     <aside className="fixed top-0 left-0 w-64 h-full bg-gray-800 text-white shadow-lg z-10">
      <div className="p-6">
        <div className="text-2xl font-bold mb-6">MySidebar</div>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link href="/"  className="hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about">
                About
              </Link>
            </li>
            <li>
              <Link href="/services">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
    </>
  );
};

export default Example;
