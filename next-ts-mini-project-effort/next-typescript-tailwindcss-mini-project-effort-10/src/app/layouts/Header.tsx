"use client";
import { NAV_LINKS } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header: React.FC = () => {
  const pathname = usePathname();
  
  const isHome = pathname === "/";
  const logoSrc = isHome ? "/img/logo1.png" : "/img/logo2.png";

  return (
    <>
      <header className="header py-[10px] bg-[#6bbd7d]">
        <div className="container mx-auto px-[1rem]">
          <div className="innerHeader flex items-center justify-between">
            <Link href="/" className="logoBlock">
              <Image src={logoSrc} alt="Logo" width={80} height={50} priority />
            </Link>
            <div className="topNav">
              <ul className="gap-[10px] flex">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`font-bold transition ${
                      pathname === link.href
                        ? "text-[#c8eacf]"
                        : "text-[#285332]"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
