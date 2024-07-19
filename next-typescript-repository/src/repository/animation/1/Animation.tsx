"use client"
import React, {  useState } from 'react'

const AnimationApp:React.FC<> = () => {
  const [isOpen,setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const handleClose = () => {
    setIsOpen(false)
  }
 
  return (
    <>
     <button onClick={toggleSidebar} className="p-2 bg-blue-500 text-white">
        Toggle Sidebar {isOpen ? 'open' : 'close'}
      </button>
      <div className={`fixed top-0 left-0 h-full bg-gray-800 text-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="p-4">
          <button onClick={handleClose}>&times;</button>
          <h2>Sidebar Content</h2>
          <p>Some content here...</p>
        </div>
      </div>
    </>
  )
}

export default AnimationApp