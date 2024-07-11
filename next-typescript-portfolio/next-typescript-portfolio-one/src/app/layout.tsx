'use client'
import Header from '@/components/Header';
import '../assets/styles/globals.css';
import Footer from '@/components/Footer';
import { usePathname, useRouter } from 'next/navigation';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // Conditionally render Header and Footer based on pathname
  const shouldShowHeaderFooter = !pathname?.includes('/dashboard'); // Adjust condition as per your requirements
  

  return (
    <html lang="en">
      <body className='h-screen flex flex-col font-poppins'>
        {/* S > HEADER */}
        {shouldShowHeaderFooter && <Header/>}
        {/* E ? HEADER */}

        {/* S > MAIN CONTENT */}
        <div className='mainContent grow bg-mainbodycolor'>
          {children}
        </div>
        {/* E > MAIN CONTENT */}

        {/* S > FOOTER */}
        {shouldShowHeaderFooter && <Footer/>}
        {/* E > FOOTER */}
      </body>
    </html>
  );
}
