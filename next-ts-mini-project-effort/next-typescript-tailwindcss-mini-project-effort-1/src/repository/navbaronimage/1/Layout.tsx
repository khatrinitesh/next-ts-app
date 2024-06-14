import React from 'react'

const Layout:React.FC = ({children}) => {
  return (
    <div className="relative">
      <nav className="absolute top-0 left-0 right-0 bg-gray-800 text-white p-4">
        Navbar Content
      </nav>
      <main>{children}</main>
    </div>
  )
}

export default Layout