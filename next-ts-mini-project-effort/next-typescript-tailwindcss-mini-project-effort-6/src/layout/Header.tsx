'use client'
import { headerData } from '@/constants/constants'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const Header:React.FC = () => {
  const isActive = usePathname();
  return (
    <header className='header bg-black'>
        <div className="container mx-auto">
          <ul className='flex'>
            {headerData.map((val,index) => (
              <li key={index}>
                <Link className={`text-white  p-2 block ${isActive === val.url ? 'bg-red-500' : 'inactive'}`} href={val.url}>{val.label}</Link>
              </li>
            ))}
          </ul>
        </div>
    </header>
  )
}

export default Header