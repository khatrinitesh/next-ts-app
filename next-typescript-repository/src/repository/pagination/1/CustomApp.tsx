import React from 'react'
import Example from './Example'

const CustomApp = () => {
    const currentPage = 1; // Replace with logic to get current page
    const totalPage = 10; // Replace with logic to get total pages
  return (
    <div>
        <div className="container mx-auto px-4">
      {/* Content of your page */}
      <h1 className="text-3xl font-bold mb-4">Example Page</h1>
      <p className="mb-8">This is the content of your page.</p>

      {/* Pagination component */}
        <Example currentPage={currentPage} totalPage={totalPage}/>
    </div>
    </div>
  )
}

export default CustomApp