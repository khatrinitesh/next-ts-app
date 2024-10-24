"use client"
import React from 'react'
import Link from 'next/link'
import BtnPrimary from '@/components/Button/BtnPrimary'
import { useRouter } from 'next/navigation'
import Banner from './../layout/Banner/Banner';

const NotFound = () => {

    const router = useRouter();

    const handleBack = () => {
        router.push('/')
    }
  return (
    <div className='errorContent h-full  justify-center items-center text-center flex flex-col gap-4 bg-sky-400'>
        <Banner title="404 page not found" description="Occaecat aliqua laborum cillum sunt velit non consequat est sit."/>
        <BtnPrimary onClick={handleBack} label="Return homepage"/>
    </div>
  )
}

export default NotFound