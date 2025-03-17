import React from 'react';

const Footer:React.FC = () => {
    const currentFullYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer bg-black py-[20px]">
        <div className="container mx-auto text-white">
            <p>&copy; copyright {currentFullYear}</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
