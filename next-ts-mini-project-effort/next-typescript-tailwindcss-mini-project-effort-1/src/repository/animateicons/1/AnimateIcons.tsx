import { ArrowRightIcon } from '@heroicons/react/16/solid';
import React from 'react'

interface AnimatedIconProps{
    animate?:boolean;
}

const AnimateIcons:React.FC<AnimatedIconProps> = ({animate=false}) => {

  
  return (
    <>
     <div className={`h-6 w-6 text-blue-500 ${animate ? 'animate-spin' : ''}`}>
      <ArrowRightIcon />
    </div>
    </>
  )
}

export default AnimateIcons