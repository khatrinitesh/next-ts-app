"use client "
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react';



const Header = () => {
    const pathname = usePathname();
    const isHomePage = pathname === "/";

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/service", label: "Service" },
        { href: "/contact", label: "Contact" },
    ];
  return (
    <header className={`header p-4 ${isHomePage ? 'bg-[blue]' : 'bg-[gray]'}`}>
            <ul className='flex'>
                {navLinks.map(link => (
                    <li key={link.href}>
                        <Link 
                            className={`text-white font-bold px-2 ${pathname === link.href ? 'bg-[red]' : ''}`}
                            href={link.href}
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </header>
  )
}

export default Header