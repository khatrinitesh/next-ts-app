import React from 'react';

const Footer:React.FC = () => {

    const currentYear = new Date().getFullYear();
  return (
    <footer className='footer py-2 bg-black'>
      <div className="container mx-auto">
        <p className="text-white py-2">&copy; copyright {currentYear}</p>
      </div>
    </footer>
  );
}

export default Footer;
