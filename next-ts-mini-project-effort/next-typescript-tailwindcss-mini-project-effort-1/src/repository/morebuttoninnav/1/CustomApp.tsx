'use client'
import React, { useState } from 'react'
import Example from './Example';
import UseMobileMenu from './UseMobileMenu';
const CustomApp = () => {
    const { isOpen,toggleMenu,openMenu,closeMenu,menuItems } = UseMobileMenu([
        { label: "Button 1", onClick: () => console.log("Button 1 clicked") },
        { label: "Button 2", onClick: () => console.log("Button 2 clicked") },
        { label: "Button 3", onClick: () => console.log("Button 3 clicked") },
    ]);
  return (
   <>
       <div className="bg-gray-800">
      <button className="block text-white p-4" onClick={openMenu}>Open Menu</button>
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-gray-800">
          <button className="block text-white p-4" onClick={closeMenu}>Close Menu</button>
          <nav>
            <ul className="text-white">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <button className="p-4 hover:bg-gray-700" onClick={item.onClick}>{item.label}</button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
   </>
  )
}

export default CustomApp

