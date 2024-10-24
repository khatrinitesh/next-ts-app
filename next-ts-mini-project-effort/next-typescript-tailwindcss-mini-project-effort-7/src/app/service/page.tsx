'use client'
import BtnPrimary from '@/components/BtnPrimary';
import MainLayout from '@/layout/MainLayout';
import { useRouter } from 'next/navigation';
import React from 'react';

const Service = () => {
  const router = useRouter();

  const handleNext = () => {
    router.push('/portfolio')
  }
return (
  <>
    <MainLayout>
    <div className="container mx-auto">
    Service

    <BtnPrimary onClick={handleNext}>Next</BtnPrimary>
    </div>
    </MainLayout>
  </>
);
}

export default Service;
