"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react';

const Header = () => {

    const pathname = usePathname();
  return (
    <header className="header bg-tertiarycolor">
        <ul className='flex listBullet'>
            <li>
                <Link href="/" className={`${pathname === "/" ? 'active' : ''}`}>Home</Link>
            </li>
            <li>
                <Link href="/about" className={`${pathname === "/about" ? 'active' : ''}`}>About</Link>
            </li>
            <li>
                <Link href="/service" className={`${pathname === "/service" ? 'active' : ''}`}>Service</Link>
            </li>
            <li>
                <Link href="/contact" className={`${pathname === "/contact" ? 'active' : ''}`}>Contact</Link>
            </li>
        </ul>
    </header>
  )
}

export default Header