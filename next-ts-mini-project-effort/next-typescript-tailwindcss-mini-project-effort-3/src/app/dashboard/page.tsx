"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const Dashboard = () => {
    const router = useRouter();

    const handleClickCustomers = () => {
        router.push('/dashboard/customers')
    }
    const handleClickInvoices = () => {
      router.push('/dashboard/invoices')
  }
  return (
    <div className="content">
        <h2 className='font-bold text-[32px]'>Dashboard</h2>
        <div className='grid gap-5 max-w-[200px]'>
        <button onClick={handleClickCustomers} className="bg-cyan-500 text-white px-6 py-2 rounded">Click to Customers</button>
        <button onClick={handleClickInvoices} className="bg-cyan-500 text-white px-6 py-2 rounded">Click to Invoices</button>
        </div>
    </div>
  )
}

export default Dashboard