import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'

interface SidebarItem {
    id: number;
    title: string;
    route: string;
  }  

  interface LeftSidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
  }

  const sidebarItems: SidebarItem[] = [
    { id: 1, title: 'Dashboard', route: '/dashboard' },
    { id: 2, title: 'Customer', route: '/dashboard/customer' },
    { id: 3, title: 'Invoices', route: '/dashboard/invoices' },
  ];

  

const LeftSidebar = ({ isOpen, toggleSidebar }: LeftSidebarProps) => {
  const pathname = usePathname();

  return (
    <div className={`z-40 sidebar p-2 flex flex-col items-center text-center justify-start fixed top-0 left-0 h-full bg-primarycolor w-[300px] transition-all duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
     

      {/* Sidebar Content */}
      <ul className="mt-10">
        {sidebarItems.map((item) => (
          <li key={item.id} className='mb-5'>
            <Link href={item.route} className={`block p-2 rounded transition-all duration-200 delay-200 hover:bg-secondarycolor hover:text-white ${pathname === item.route ? 'bg-secondarycolor text-white' : ''}`}>
                {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LeftSidebar