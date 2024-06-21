import React from 'react';
import Example from './Example';

const CustomApp = () => {
  return (
    <div className='container mx-auto'>
        <h1 className="text-3xl font-bold text-center mb-8">Scroll Indicator</h1>
        <div className="h-screen overflow-y-scroll">
        {/* Scrollable content */}
        <div className="h-200vh">
          {/* Content large enough to enable scrolling */}
          <p>Scroll down to see the scroll indicator.</p>
        </div>
      </div>
        <Example />
    </div>
  )
}

export default CustomApp