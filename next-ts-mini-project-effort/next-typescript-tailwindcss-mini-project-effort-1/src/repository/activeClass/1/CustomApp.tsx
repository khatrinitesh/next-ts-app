"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

interface NavItem {
    href: string;
    label: string;
  }
  
  interface CustomAppProps {
    navItems: NavItem[];
  }

const CustomApp:React.FC<NavItem> = ({navItems}) => {
    const [activeItem, setActiveItem] = useState<number | null>(null);
  const router = useRouter();

  const handleSetActive = (index: number) => {
    setActiveItem(index);
  }
  return (
    <>
      <nav>
        <ul className="flex space-x-4">
          {navItems.map((item, index) => (
            <li key={item.href}>
              <Link href={item.href} className={`${activeItem === item.href ? 'active' : ''} px-4 py-2 rounded-full transition duration-300 ${
                    router.pathname === item.href
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-700 hover:bg-gray-200 hover:text-blue-500'
                  }`}
                  onClick={() => handleSetActive(index)}>
                  {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default CustomApp



