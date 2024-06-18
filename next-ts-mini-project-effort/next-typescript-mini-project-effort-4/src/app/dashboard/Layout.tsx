'use client'
import LeftSidebar from '@/components/dashboard/LeftSidebar';
import { useEffect, useState } from 'react';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

   // Effect to toggle body overflow-y class
   useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    // Clean up
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);
  return (
       <>
       {/* S > LEFT SIDEBAR */}
      <LeftSidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      {/* E > LEFT SIDEBAR */}

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 z-[9] w-screen min-h-screen bg-[rgba(0,0,0,1)] opacity-50"
          onClick={toggleSidebar}
        />
      )}

      {/* S > DASHBOARD MAIN CONTENT */}
      <div
        className={`dashboardMainContent w-full pt-6 bg-secondarycolor h-screen relative top-0 right-0 transition-all duration-300 z-1 ${
          isOpen ? 'ml-[300px]' : 'ml-0'
        }`}
      >
        {/* Hamburger Button */}
        <button
          className="absolute top-2 left-2 text-white focus:outline-none z-[9999]"
          onClick={toggleSidebar}
        >
          <svg
            className="w-6 h-6 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Main Content */}
        {children}
      </div>
      {/* E > DASHBOARD MAIN CONTENT */}
       </>
  );
}
