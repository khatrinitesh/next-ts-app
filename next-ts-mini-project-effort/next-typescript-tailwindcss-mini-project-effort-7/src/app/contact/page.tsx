import MainLayout from '@/layout/MainLayout';
import React from 'react';
import FillForm from './../../components/FillForm';

const Contact = () => {
  return (
    <>
       <MainLayout>
       <div className="container mx-auto">
       Contact
       <br/>
       <FillForm/>
       </div>
      </MainLayout>
    </>
  );
}

export default Contact;
