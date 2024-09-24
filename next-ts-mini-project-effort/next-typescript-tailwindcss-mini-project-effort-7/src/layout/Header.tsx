"use client"
import React, { useEffect, useState } from 'react';
import { usePathname  } from 'next/navigation';
import Link from 'next/link';
import { navData } from '@/constants/navdata';

const Header = () => {

  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
    <header className='header py-2 bg-black'>
        <div className="container mx-auto">
          <ul className='flex'>
            {navData.map((val, index) => (
              <li key={index}>
                <Link
                  href={val.url}
                  className={`${isClient && pathname === val.url ? 'bg-red-600' : ''} text-white block p-2`}
                >
                  {val.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
