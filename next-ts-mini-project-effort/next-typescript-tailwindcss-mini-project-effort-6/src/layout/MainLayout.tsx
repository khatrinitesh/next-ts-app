import React from 'react';

// COMPONENTS
import Header from './Header'
import Footer from './Footer';
// TYPES
import { ChildrenProps } from '@/types';

const MainLayout:React.FC<ChildrenProps> = ({children}) => {
  return (
    <>
    <div className='appContainer'>
        <Header/>
        <div className='mainContent bg-gray-300 grow'>
            {children}
        </div>
        <Footer/>
    </div>
    </>
  )
}

export default MainLayout