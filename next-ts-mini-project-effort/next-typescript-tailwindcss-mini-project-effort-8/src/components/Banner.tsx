import React from 'react';

const Banner:React.FC<BannerProps> = ({title,description,bannerStyle}) => {
  return (
    <div className={`${bannerStyle} bannerContent py-[50px] bg-blue-400`}>
      <div className="container mx-auto">
        <h2 className='text-[32px] font-bold text-red-400'>{title}</h2>
        <p className="text-[18px]">{description}</p>
      </div>
    </div>
  );
}

export default Banner;
