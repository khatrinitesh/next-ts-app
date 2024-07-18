"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  // router
  const pathname = usePathname(); 

  // navlinks
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/service", label: "Service" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-black p-2 header">
       <div className="container mx-auto">
        <ul className="flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={`text-white font-bold px-2 ${pathname === link.href ? "bg-[red]" : ""}`}>
                  {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
