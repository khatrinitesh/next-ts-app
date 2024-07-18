import React from 'react'

const Footer = () => {
    const currentFullYear = new Date().getFullYear();
  return (
    <footer className="footer bg-[#252525] text-white p-4">
        <div className="container mx-auto">
          <p>&copy; copyright {currentFullYear}</p>
        </div>
    </footer>
  )
}

export default Footer