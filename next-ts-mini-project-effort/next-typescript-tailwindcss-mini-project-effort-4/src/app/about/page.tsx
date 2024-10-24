import React from 'react'
import MainLayout from "@/layout/MainLayout/MainLayout";
import Banner from '@/layout/Banner/Banner';
import { mukta, oswald, poppins } from '@/components/FontFace/FontFace';

const About = () => {
  return (
    <MainLayout>
    <div className='content'>
      <div className="container mx-auto">
          <Banner title="About" description="Esse aute consequat consectetur ipsum proident culpa do ad."/>
          <h2 className={`${oswald.className}`}>Oswald Anim esse ex commodo tempor Lorem.</h2>
          <h2 className={`${poppins.className}`}>Poppins Anim esse ex commodo tempor Lorem.</h2>
          <h2 className={`${mukta.className}`}>Mukta  Anim esse ex commodo tempor Lorem.</h2>
      </div>
  </div> 
  </MainLayout>
  )
}

export default About