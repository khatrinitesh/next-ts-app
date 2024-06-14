'use client'
import React, { useState } from 'react'
import Example from './Example';
import UseMobileMenu from './UseMobileMenu';
const CustomApp = () => {
    const { isOpen, openMenu, closeMenu } = UseMobileMenu();
  return (
   <>
        <button className="block text-black p-4" onClick={openMenu}>Open Menu</button>
        {isOpen && (
            <div className="absolute top-0 left-0 w-full h-full bg-gray-800 transition-all duration-150 delay-150">
            <button className="block text-white p-4" onClick={closeMenu}>Close Menu</button>
            <nav>
              <ul className="text-white">
                <li>Menu Item 1</li>
                <li>Menu Item 2</li>
                <li>Menu Item 3</li>
              </ul>
            </nav>
          </div>
        )}
   </>
  )
}

export default CustomApp

