import React from 'react';

const Footer:React.FC = () => {
  return (
    <footer className='bg-black py-[20px]'>
      <div className="container mx-auto">
        <p className="text-white">&copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

export default Footer;
