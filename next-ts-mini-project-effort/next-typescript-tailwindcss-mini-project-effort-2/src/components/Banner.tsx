import React from 'react'

interface BannerProps{
    bannerStyle:React.StyleHTMLAttributes,
    title:string;
    desc:string;
}

const Banner:React.FC<BannerProps> = ({bannerStyle,title,desc}) => {
  return (
    <div className={`${bannerStyle} bg-custom-graident1 bannerContent from-amber-100 via-emerald-600 to-amber-500 py-10`}>
      <div className='container mx-auto'>
        <h3 className="text-[32px] font-bold ">{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default Banner