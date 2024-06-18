'use client'
import LeftSidebar from '@/components/dashboard/LeftSidebar';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
       <>
       <LeftSidebar/>
        {children}
       </>
  );
}
