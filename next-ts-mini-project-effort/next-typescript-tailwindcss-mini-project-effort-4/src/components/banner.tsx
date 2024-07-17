import React from 'react'

const Banner = ({title,description}) => {
  return (
    <div className='bannerContent py-6 bg-cyan-100'>
       <div className="container mx-auto px-[1rem]">
        <h3 className="title text-[32px] font-bold">{title}</h3>
        <p className="desc text-[14px] font-medium">{description}</p>
        </div>
    </div>
  )
}

export default Banner