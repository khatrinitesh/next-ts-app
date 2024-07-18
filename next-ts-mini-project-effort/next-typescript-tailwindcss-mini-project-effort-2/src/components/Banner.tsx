import React from 'react'

const Banner = ({title,desc,bannerStyle}) => {
  return (
    <div className={`${bannerStyle} p-5`}>
        <div className="container mx-auto">
        <h2 className='font-bold text-[32px] uppercase'>{title}</h2>
        <p className='text-white font-semibold'>{desc}</p>
        </div>
    </div>
  )
}

export default Banner