import { BannerProps } from '@/types'
import React from 'react'

const Banner:React.FC<BannerProps> = ({title,description}) => {
  return (
    <div className='bannerContent bg-sky-300 py-10'>
      <div className="container mx-auto">
        <h3 className='font-bold text-[24px]'>{title}</h3>
        <p className='font-medium text-[15px]'>{description}</p>
      </div>
    </div>
  )
}

export default Banner