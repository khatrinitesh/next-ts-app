import React from 'react'
import Example from './Example'

const CustomApp = () => {
  return (
    <>
      <Example message="This is a success message!" type="success" />
      <Example message="This is a danger message!" type="danger" />
    </>
  )
}

export default CustomApp