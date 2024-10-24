'use client'
import MainLayout from '@/layout/MainLayout';
import { useRouter } from 'next/navigation';
import React from 'react';
import BtnPrimary from './../../components/BtnPrimary';

const Portfolio = () => {
  const router = useRouter();

  const handleNext = () => {
    router.push('/contact')
  }
return (
  <>
    <MainLayout>
    <div className="container mx-auto">
    Portfolio

    <BtnPrimary onClick={handleNext}>Next</BtnPrimary>
    </div>
    </MainLayout>
  </>
);
}

export default Portfolio;
