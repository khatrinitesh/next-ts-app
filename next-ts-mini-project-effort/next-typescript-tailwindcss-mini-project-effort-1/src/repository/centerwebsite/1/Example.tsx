import React from 'react'

const Example:React.FC = () => {
  return (
    <>
      <CenteredLayout>
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
        <h1 className="text-xl font-bold">Welcome to My Centered App</h1>
        <p className="text-gray-500">This is a simple example of a centered layout using React, TypeScript, and Tailwind CSS.</p>
      </div>
    </CenteredLayout>
    </>
  )
}

export default Example



const CenteredLayout: React.FC = ({ children }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        {children}
      </div>
    </div>
  );
};
