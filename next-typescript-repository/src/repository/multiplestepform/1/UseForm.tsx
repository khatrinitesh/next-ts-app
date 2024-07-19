import React, { useState } from 'react';

interface FormValues{
    fName:string;
    lName:string;
    email:string;
}

const UseForm = () => {
    const [values, setValues] = useState<FormValues>({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    });
    const [step, setStep] = useState<number>(1);
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    };
  
    const nextStep = () => {
      setStep((prevStep) => prevStep + 1);
    };
  
    const prevStep = () => {
      setStep((prevStep) => prevStep - 1);
    };
  
    return { values, step, handleChange, nextStep, prevStep };
  };

export default UseForm;