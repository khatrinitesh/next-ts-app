import React from 'react'
import DashboardLayout from '../Layout'

const page = () => {
  return (
    <DashboardLayout>
    <div className="content py-5">
        <div className="container mx-auto">
          <h1 className="font-bold text-fs32">Welcome to Customer page</h1>
          <p className="font-semibold text-fs16">This is the Customerpage.</p>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default page