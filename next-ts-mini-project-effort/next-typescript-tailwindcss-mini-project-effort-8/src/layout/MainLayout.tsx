import React, { Children } from 'react';
import Header from './Header';
import Footer from './Footer';
import { MainLayoutProps } from '@/interface';

const MainLayout:React.FC<MainLayoutProps> = ({children}) => {
  return (
    <>
    <div className="appLayout min-h-screen">
      <Header/>
        <div className='mainContent min-h-[calc(100vh-148px)]'>
            {children}
        </div>
      <Footer/>
      </div>
    </>
  );
}

export default MainLayout;
