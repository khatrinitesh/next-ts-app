import { BannerProps } from '@/interface/interface'
import React from 'react'

const Banner:React.FC<BannerProps> = ({title,description}) => {
  return (
    <div className='bannerContent bg-gray-400 py-5 px-5 '>
      <div className="container mx-auto">
        <h3 className="title font-bold text-[32px]">{title}</h3>
        <p className="description text-[16px]">{description}</p>
      </div>
    </div>
  )
}

export default Banner