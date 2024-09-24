import { BannerTypes } from '@/types/type';
import React from 'react';

const Banner:React.FC<BannerTypes> = ({title,desc}) => {
  return (
    <div className='bannerContent py-[50px] bg-red-400'>
        <div className="container mx-auto">
            <h3 className='font-bold text-[32px]'>{title}</h3>
            <p className="font-semibold text-[18px]">{desc}</p>
        </div>
      
    </div>
  );
}

export default Banner;
