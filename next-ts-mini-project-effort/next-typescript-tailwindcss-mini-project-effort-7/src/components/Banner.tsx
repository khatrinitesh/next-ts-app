import { BannerProps } from '@/constants/constants';
import React from 'react';

const Banner:React.FC<BannerProps> = ({children}) => {
  return (
    <div className='bannerContent'>
      <div className='mx-auto container'>
      {children}
      </div>
    </div>
  );
}

export default Banner;
