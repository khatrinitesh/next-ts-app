"use client"
import React from 'react';

// next with image and link
import Image from 'next/image';
import Link from 'next/link';
// library
import { usePathname } from 'next/navigation';

const Header = () => {

  const router = usePathname();

     // Check current pathname
  const isHome = router === '/';
  const isAbout = router === '/about';
  const isContact = router === '/contact';
  const isService = router === '/service';
  const isOtherPage = isAbout || isContact || isService; // Combine checks for other pages

  console.log("Current Path:", router); // Debugging line
  return (
    <header className='bg-black p-[20px]'>
      <div className="container mx-auto">
        <div className="logoBlock">
          <Link href="/" className='text-white block'>
          {isHome ? (
              <Image src="/img/logo1.png" alt="Home Logo" width={100} height={50} />
            ) :  (
              <Image src="/img/logo2.png" alt="Other Logo" width={100} height={50} />
            ) } {/* Handle other pages as needed */}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
