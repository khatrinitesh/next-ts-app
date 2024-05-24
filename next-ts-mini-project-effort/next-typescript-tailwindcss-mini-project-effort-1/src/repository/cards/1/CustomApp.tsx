import React from 'react'
import Example from './Example'

const CustomApp = () => {
  return (
    <>
    <div style={{color:'var(--whitecolor)',backgroundColor:'var(--color-primary)',padding:'var(--spacing-large)'}}>
        <Example title="Card Title 1" content="This is the content of the first card." />
        <Example title="Card Title 2" content="This is the content of the second card." />
        <Example title="Card Title 3" content="This is the content of the third card." />
    </div> 
    </>
  )
}

export default CustomApp