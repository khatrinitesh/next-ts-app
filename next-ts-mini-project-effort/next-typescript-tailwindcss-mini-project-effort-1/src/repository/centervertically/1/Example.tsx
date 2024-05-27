import React from 'react'

const Example = () => {
  return (
    <>
      <CenteredContent/>
    </>
  )
}

export default Example


const CenteredContent: React.FC = () => {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-blue-500 p-6 rounded-lg text-white">
          Vertically Centered Content
        </div>
      </div>
    );
  };
