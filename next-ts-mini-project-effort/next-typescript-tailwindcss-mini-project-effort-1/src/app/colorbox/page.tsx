import React from 'react'
import LeftPage from './@left/page'
import RightPage from './@right/page'
import ColorBoxLayout from './layout'

const ColorBoxPage = () => {
  return (
    <>
    <ColorBoxLayout>
        <LeftPage/>
        <RightPage/>
    </ColorBoxLayout>
    </>
  )
}

export default ColorBoxPage