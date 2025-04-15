import React from 'react';
import Header from './Header';
import Footer from './Footer';

const MainLayout:React.FC<MainLayoutProps> = ({children}) => {
  return (
    <>
    <div className="appLayout">
      <Header/>
      <div className='mainContent h-full'>
        {children}
      </div> 
      <Footer/>
      </div>
    </>
  );
}

export default MainLayout;
