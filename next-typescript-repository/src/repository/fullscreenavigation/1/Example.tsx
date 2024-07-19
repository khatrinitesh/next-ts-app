"use client";
import React, { ReactNode,useEffect, useState } from "react";
// import './style.css';
import Link from "next/link";
import Image from "next/image";
import Wallpaper from "../../../assets/img/wallpaper.jpg";

const Example:React.FC<> = ({}) => {

  return (
    <>
    <Home/>
    </>
  );
};

export default Example;

s NavigationOverlayProps {
    isOpen: boolean;
    onClose: () => void;
  }
  

const NavigationOverlay:React.FC<NavigationOverlayProps> = ({isOpen,onClose}) => {

  return (
    <>
    <div className={`fixed inset-0 bg-black bg-opacity-75 z-50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="flex justify-center items-center h-full">
        <nav className="text-white text-center">
          <ul className="space-y-8 text-xl">
            <li><a href="#" className="hover:text-gray-300">Home</a></li>
            <li><a href="#" className="hover:text-gray-300">About</a></li>
            <li><a href="#" className="hover:text-gray-300">Services</a></li>
            <li><a href="#" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </nav>
        <button onClick={onClose} className="absolute top-4 right-4 text-white text-2xl">&times;</button>
      </div>
    </div>
    </>
  );
};

interface HeaderProps {
    onMenuClick: () => void;
  }
  
  const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
    return (
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">My Website</div>
        <button onClick={onMenuClick} className="text-2xl focus:outline-none">&#9776;</button>
      </header>
    );
  };

  const Home: React.FC = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
  
    const handleMenuClick = () => {
      setIsNavOpen(!isNavOpen);
    };
  
    const handleCloseNav = () => {
      setIsNavOpen(false);
    };
  
    return (
      <div>
        <Header onMenuClick={handleMenuClick} />
        <NavigationOverlay isOpen={isNavOpen} onClose={handleCloseNav} />
        <main className="p-4">
          <h1 className="text-4xl">Welcome to My Website</h1>
        </main>
      </div>
    );
  };
