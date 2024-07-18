import React from 'react'

const Footer = () => {

    const currentFullYear = new Date().getFullYear();
  return (
    <footer className='bg-black text-white p-2'>
      <div className="container">
        <p>&copy; {currentFullYear}</p>
      </div>
    </footer>
  )
}

export default Footer