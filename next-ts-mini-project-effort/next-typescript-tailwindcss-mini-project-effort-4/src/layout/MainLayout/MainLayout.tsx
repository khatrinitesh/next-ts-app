import React from 'react'
import Header from './../Header/Header';
import Footer from '../Footer/Footer';
import { MainLayoutProps } from '@/interface/interface';

const MainLayout:React.FC<MainLayoutProps> = ({children}) => {
  return (
    <>
    <div className='appContainer'>
    <Header/>
    <div className='mainContent bg-sky-300 h-full'>
        {children}
    </div>
    <Footer/>
    </div>
    </>
  )
}

export default MainLayout