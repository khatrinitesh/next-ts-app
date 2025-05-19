import React from 'react';

const Footer:React.FC = () => {

    const currentFullYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer bg-[#2d683b] py-[10px]">
        <div className="container mx-auto px-[1rem]">
            <p className='text-white'>&copy; copyright {currentFullYear}</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
