'use client';
import BtnPrimary from '@/components/BtnPrimary';
import MainLayout from '@/layout/MainLayout';
import { useRouter } from 'next/navigation';
import React from 'react';

const About = () => {

    const router = useRouter();

    const handleNext = () => {
      router.push('/service')
    }
  return (
    <>
      <MainLayout>
      <div className="container mx-auto">
      About
      <BtnPrimary onClick={handleNext}>Next</BtnPrimary>
      </div>

     
      </MainLayout>
    </>
  );
}

export default About;
