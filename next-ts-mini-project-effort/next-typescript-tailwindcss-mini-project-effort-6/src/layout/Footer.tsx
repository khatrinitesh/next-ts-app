import SocialMediaComp from '@/components/SocialMedia';
import React from 'react'

const Footer:React.FC = () => {

    const currentYear = new Date().getFullYear();
  return (
    <footer className='bg-black text-white p-2'>
        <div className="container mx-auto">
          <div className="innerFooter flex justify-between items-center">
              <p>&copy; copyright {currentYear}</p>
            <SocialMediaComp/>
          </div>
        </div>
    </footer>
  )
}

export default Footer