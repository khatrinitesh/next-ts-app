'use client';
import { useRouter } from 'next/navigation';
import React from 'react'

const Invoices = () => {
  const router = useRouter();

  const handleBack = () => {
    router.push('/dashboard');
  }
  return (
    <div className="content">
      <button onClick={handleBack} className="bg-blue-500 text-white px-6 py-2 rounded">Back Dashboard</button>
        <h2 className='font-bold text-[32px]'>Invoices</h2>
    </div>
  )
}

export default Invoices