"use client";
import React, { useEffect, useState } from "react";
import Link from 'next/link';

const Example: React.FC<EqualHeightColumnsProps> = ({columns}) => {
  
    const links = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/services', label: 'Services' },
        { href: '/contact', label: 'Contact' },
      ];
  return (
    <>
     <nav className="bg-blue-500">
      <ul className="flex justify-between">
        {links.map((link, index) => (
          <li>
            <Link href={link.href} className="block text-center text-white py-4 hover:bg-blue-700">
                {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
    </>
  );
};

export default Example;
