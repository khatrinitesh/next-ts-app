import React from 'react';
import Example from './Example';

const CustomApp = () => {
  return (
    <>
        <h1 className="text-2xl font-bold mb-4">Avatar Component Example</h1>
      <div className="flex space-x-4">
        <Example imageUrl="https://via.placeholder.com/150" alt="Small Avatar" size="small" />
        <Example imageUrl="https://via.placeholder.com/150" alt="Medium Avatar" size="medium" />
        <Example imageUrl="https://via.placeholder.com/150" alt="Large Avatar" size="large" />
      </div>
    </>
  )
}

export default CustomApp