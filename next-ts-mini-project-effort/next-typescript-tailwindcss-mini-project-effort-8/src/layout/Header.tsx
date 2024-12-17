"use client"
import Link from 'next/link';
import { usePathname  } from 'next/navigation';
import React from 'react';

const Header:React.FC = () => {

  const pathname = usePathname ();
  return (
    <header className='bg-black py-[20px]'>
      <div className="container mx-auto">
        <ul className="flex">
          <li>
            <Link className={`text-white font-bold block p-[10px] ${pathname === '/' ? "bg-red-600" : ""}`} href="/">Home</Link>
          </li>
          <li>
            <Link className={`text-white font-bold block p-[10px] ${pathname === '/about' ? "bg-red-600" : ""}`} href="/about">About</Link>
          </li>
          <li>
            <Link className={`text-white font-bold block p-[10px] ${pathname === '/service' ?  "bg-red-600" : ""}`} href="/service">Service</Link>
          </li>
          <li>
            <Link className={`text-white font-bold block p-[10px] ${pathname === '/contact' ?  "bg-red-600" : ""}`} href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
