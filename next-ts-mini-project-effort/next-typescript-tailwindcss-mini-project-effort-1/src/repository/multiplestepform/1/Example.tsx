'use client'
import React, { useState } from 'react';
import { ModalImageProps } from './interface';
import UseModal from './UseModal';
import Image from 'next/image';
import UseForm from "./UseForm";
import StepForm1 from './StepForm1';
import StepForm2 from './StepForm2';
import StepForm3 from './StepForm3';

const Example:React.FC = () => {
    const { values, step, handleChange, nextStep, prevStep } = UseForm();
    const [submitted, setSubmitted] = useState(false);

    switch (step) {
        case 1:
          return <StepForm1 values={values} handleChange={handleChange} nextStep={nextStep} />;
        case 2:
          return <StepForm1 values={values} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />;
        case 3:
          return <StepForm1 values={values} prevStep={prevStep} />;
        default:
          return null;
      }
}

export default Example
