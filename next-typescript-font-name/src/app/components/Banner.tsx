import { poppins } from '@/FontFace'
import React from 'react'

const Banner = ({title,headStyle}) => {
  return (
    <div>
        <h3 className={`${headStyle}`} style={{fontFamily:poppins.style.fontFamily}}>{title}</h3>
    </div>
  )
}

export default Banner