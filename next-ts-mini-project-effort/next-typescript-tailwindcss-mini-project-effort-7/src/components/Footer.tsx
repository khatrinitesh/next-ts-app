import React from 'react';

const Footer = () => {

  const currentYear = new Date().getFullYear();
  return (
    <footer className='bg-black p-[20px] text-white'>
      &copy; Copyright {currentYear}
    </footer>
  );
}

export default Footer;
