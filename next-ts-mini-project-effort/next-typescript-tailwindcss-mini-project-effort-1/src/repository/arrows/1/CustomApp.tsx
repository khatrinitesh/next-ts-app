"use client"
import React from 'react'
import Arrows from './arrows';
import Navigation from './Navigation';

const CustomApp = () => {

    const handlePrv = () => {
        console.log('Previous button clicked');
    }

    const handleNxt = () => {
        console.log('Next button clicked');
    }
  return (
    <>
    <Navigation onPrv={handlePrv} onNxt={handleNxt} />
    </>
  )
}

export default CustomApp