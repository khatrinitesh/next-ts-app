import React from 'react'

const Footer = () => {
    const currentFullYear = new Date().getFullYear();
    const txtCopyright:string = 'Copyright'
  return (
    <footer className='bg-black text-white p-5'>
        <p>&copy; {txtCopyright} {currentFullYear}</p>
    </footer>
  )
}

export default Footer