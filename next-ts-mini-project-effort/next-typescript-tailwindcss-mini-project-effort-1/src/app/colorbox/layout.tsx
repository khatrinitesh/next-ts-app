import React, { Children } from 'react'

const ColorBoxLayout = ({children}) => {
  return (
    <div className='relative bg-[orange] h-full'>
        {children}
    </div>
  )
}

export default ColorBoxLayout